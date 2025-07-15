import React, { useState, useEffect } from 'react';
import { Calendar, Download, Trash2, TrendingUp, TrendingDown, BarChart3, Filter } from 'lucide-react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { format, subDays, subMonths, isWithinInterval } from 'date-fns';
import { getCalculationHistory, deleteCalculation, downloadCSV, StoredCalculation } from '../utils/storage';
import { generatePDFReport } from '../utils/pdfExport';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function HistorySection() {
  const [calculations, setCalculations] = useState<StoredCalculation[]>([]);
  const [filteredCalculations, setFilteredCalculations] = useState<StoredCalculation[]>([]);
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter' | 'year'>('month');
  const [viewMode, setViewMode] = useState<'chart' | 'table'>('chart');
  const [selectedPeriods, setSelectedPeriods] = useState<string[]>([]);

  useEffect(() => {
    loadHistory();
  }, []);

  useEffect(() => {
    filterCalculations();
  }, [calculations, timeRange]);

  const loadHistory = () => {
    const history = getCalculationHistory();
    setCalculations(history);
  };

  const filterCalculations = () => {
    const now = new Date();
    let startDate: Date;

    switch (timeRange) {
      case 'week':
        startDate = subDays(now, 7);
        break;
      case 'month':
        startDate = subMonths(now, 1);
        break;
      case 'quarter':
        startDate = subMonths(now, 3);
        break;
      case 'year':
        startDate = subMonths(now, 12);
        break;
      default:
        startDate = subMonths(now, 1);
    }

    const filtered = calculations.filter(calc =>
      isWithinInterval(calc.timestamp, { start: startDate, end: now })
    );

    setFilteredCalculations(filtered.sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ));
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this calculation?')) {
      deleteCalculation(id);
      loadHistory();
    }
  };

  const handleExportCSV = () => {
    downloadCSV(filteredCalculations, `carbon-footprint-${timeRange}.csv`);
  };

  const handleExportPDF = async () => {
    await generatePDFReport(filteredCalculations, timeRange);
  };

  // Chart data preparation
  const chartData = {
    labels: filteredCalculations.map(calc => 
      format(calc.timestamp, 'MMM dd')
    ).reverse(),
    datasets: [
      {
        label: 'Carbon Footprint (kg CO₂)',
        data: filteredCalculations.map(calc => calc.footprint).reverse(),
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(16, 185, 129)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 14,
            weight: '600'
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        titleColor: '#fff',
        bodyColor: '#e2e8f0',
        borderColor: 'rgba(16, 185, 129, 0.3)',
        borderWidth: 1,
        cornerRadius: 12,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `${context.parsed.y.toLocaleString()} kg CO₂`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(71, 85, 105, 0.2)',
        },
        ticks: {
          color: '#64748b',
          font: {
            size: 12
          },
          callback: function(value: any) {
            return value.toLocaleString() + ' kg';
          }
        }
      },
      x: {
        grid: {
          color: 'rgba(71, 85, 105, 0.2)',
        },
        ticks: {
          color: '#64748b',
          font: {
            size: 12
          }
        }
      }
    }
  };

  // Breakdown chart data
  const getBreakdownData = () => {
    if (filteredCalculations.length === 0) return null;

    const avgFootprint = filteredCalculations.reduce((sum, calc) => sum + calc.footprint, 0) / filteredCalculations.length;
    
    return {
      labels: ['Transportation', 'Energy', 'Lifestyle'],
      datasets: [{
        data: [
          avgFootprint * 0.35,
          avgFootprint * 0.28,
          avgFootprint * 0.37
        ],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(34, 197, 94, 0.8)'
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(245, 158, 11)',
          'rgb(34, 197, 94)'
        ],
        borderWidth: 2
      }]
    };
  };

  const breakdownData = getBreakdownData();

  // Statistics
  const stats = {
    total: filteredCalculations.length,
    average: filteredCalculations.length > 0 
      ? filteredCalculations.reduce((sum, calc) => sum + calc.footprint, 0) / filteredCalculations.length 
      : 0,
    trend: filteredCalculations.length > 1 
      ? filteredCalculations[0].footprint - filteredCalculations[filteredCalculations.length - 1].footprint
      : 0,
    lowest: filteredCalculations.length > 0 
      ? Math.min(...filteredCalculations.map(calc => calc.footprint))
      : 0,
    highest: filteredCalculations.length > 0 
      ? Math.max(...filteredCalculations.map(calc => calc.footprint))
      : 0
  };

  if (calculations.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-16">
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No History Yet</h3>
          <p className="text-gray-600">
            Start calculating your carbon footprint to see your history and trends here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header with Controls */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Carbon Footprint History</h2>
            <p className="text-gray-600">Track your progress and analyze trends over time</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            {/* Time Range Filter */}
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
              <option value="year">Last Year</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('chart')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'chart'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <BarChart3 className="w-4 h-4 inline mr-2" />
                Charts
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'table'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Calendar className="w-4 h-4 inline mr-2" />
                Table
              </button>
            </div>

            {/* Export Buttons */}
            <button
              onClick={handleExportCSV}
              className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>CSV</span>
            </button>
            
            <button
              onClick={handleExportPDF}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Records</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Average</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(stats.average).toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">kg CO₂</p>
            </div>
            <BarChart3 className="w-8 h-8 text-emerald-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Trend</p>
              <p className={`text-2xl font-bold ${stats.trend < 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                {stats.trend > 0 ? '+' : ''}{Math.round(stats.trend).toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">kg CO₂</p>
            </div>
            {stats.trend < 0 ? (
              <TrendingDown className="w-8 h-8 text-emerald-500" />
            ) : (
              <TrendingUp className="w-8 h-8 text-red-500" />
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Lowest</p>
              <p className="text-2xl font-bold text-emerald-600">
                {Math.round(stats.lowest).toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">kg CO₂</p>
            </div>
            <TrendingDown className="w-8 h-8 text-emerald-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Highest</p>
              <p className="text-2xl font-bold text-red-600">
                {Math.round(stats.highest).toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">kg CO₂</p>
            </div>
            <TrendingUp className="w-8 h-8 text-red-500" />
          </div>
        </div>
      </div>

      {/* Charts or Table View */}
      {viewMode === 'chart' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trend Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Footprint Trend</h3>
            <div className="h-80">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Breakdown Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Breakdown</h3>
            <div className="h-80 flex items-center justify-center">
              {breakdownData && (
                <Doughnut 
                  data={breakdownData} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'bottom',
                        labels: {
                          padding: 20,
                          usePointStyle: true
                        }
                      }
                    }
                  }} 
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Table View */
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Footprint
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transportation
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Energy
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lifestyle
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCalculations.map((calc) => (
                  <tr key={calc.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {format(calc.timestamp, 'MMM dd, yyyy')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">
                        {Math.round(calc.footprint).toLocaleString()} kg
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {Math.round(calc.footprint * 0.35).toLocaleString()} kg
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {Math.round(calc.footprint * 0.28).toLocaleString()} kg
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {Math.round(calc.footprint * 0.37).toLocaleString()} kg
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {calc.location ? `${calc.location.city}, ${calc.location.country}` : 'Unknown'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <button
                        onClick={() => handleDelete(calc.id)}
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}