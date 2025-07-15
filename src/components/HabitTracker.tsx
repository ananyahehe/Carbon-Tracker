import React, { useState } from 'react';
import { Plus, Check, Trash2, Calendar, TrendingUp, Target } from 'lucide-react';
import { HabitEntry } from '../types';

interface HabitTrackerProps {
  onHabitAdd: (habit: Omit<HabitEntry, 'id'>) => void;
}

export default function HabitTracker({ onHabitAdd }: HabitTrackerProps) {
  const [habits, setHabits] = useState<HabitEntry[]>([
    {
      id: '1',
      date: new Date(),
      type: 'transport',
      action: 'Took stairs instead of elevator',
      carbonSaved: 0.1,
      description: '5 floors up'
    },
    {
      id: '2',
      date: new Date(Date.now() - 86400000),
      type: 'energy',
      action: 'Unplugged devices when not in use',
      carbonSaved: 0.5,
      description: 'TV, computer, chargers'
    },
    {
      id: '3',
      date: new Date(Date.now() - 172800000),
      type: 'lifestyle',
      action: 'Chose plant-based lunch',
      carbonSaved: 2.3,
      description: 'Lentil curry instead of beef'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newHabit, setNewHabit] = useState({
    type: 'transport' as const,
    action: '',
    carbonSaved: 0,
    description: ''
  });

  const quickActions = [
    { type: 'transport', action: 'Walked instead of driving', carbonSaved: 2.5, icon: '🚶' },
    { type: 'transport', action: 'Used public transport', carbonSaved: 1.8, icon: '🚌' },
    { type: 'transport', action: 'Biked to destination', carbonSaved: 3.2, icon: '🚲' },
    { type: 'energy', action: 'Turned off lights', carbonSaved: 0.3, icon: '💡' },
    { type: 'energy', action: 'Used cold water for washing', carbonSaved: 0.8, icon: '🧺' },
    { type: 'lifestyle', action: 'Ate vegetarian meal', carbonSaved: 1.5, icon: '🥗' },
    { type: 'lifestyle', action: 'Avoided single-use plastic', carbonSaved: 0.2, icon: '♻️' },
    { type: 'consumption', action: 'Bought second-hand item', carbonSaved: 5.0, icon: '👕' }
  ];

  const totalSaved = habits.reduce((sum, habit) => sum + habit.carbonSaved, 0);
  const thisWeekSaved = habits
    .filter(habit => habit.date >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000))
    .reduce((sum, habit) => sum + habit.carbonSaved, 0);

  const addQuickAction = (action: any) => {
    const newHabitEntry: HabitEntry = {
      id: Date.now().toString(),
      date: new Date(),
      type: action.type,
      action: action.action,
      carbonSaved: action.carbonSaved,
      description: ''
    };
    
    setHabits(prev => [newHabitEntry, ...prev]);
    onHabitAdd(newHabitEntry);
  };

  const addCustomHabit = () => {
    if (!newHabit.action) return;

    const habitEntry: HabitEntry = {
      id: Date.now().toString(),
      date: new Date(),
      ...newHabit
    };

    setHabits(prev => [habitEntry, ...prev]);
    onHabitAdd(habitEntry);
    setNewHabit({ type: 'transport', action: '', carbonSaved: 0, description: '' });
    setShowAddForm(false);
  };

  const removeHabit = (id: string) => {
    setHabits(prev => prev.filter(habit => habit.id !== id));
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'transport': return 'bg-blue-100 text-blue-700';
      case 'energy': return 'bg-orange-100 text-orange-700';
      case 'lifestyle': return 'bg-green-100 text-green-700';
      case 'consumption': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total CO₂ Saved</p>
              <p className="text-2xl font-bold text-emerald-600">{totalSaved.toFixed(1)}</p>
              <p className="text-xs text-gray-500">kg this month</p>
            </div>
            <TrendingUp className="w-8 h-8 text-emerald-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">This Week</p>
              <p className="text-2xl font-bold text-blue-600">{thisWeekSaved.toFixed(1)}</p>
              <p className="text-xs text-gray-500">kg CO₂ saved</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Actions Logged</p>
              <p className="text-2xl font-bold text-purple-600">{habits.length}</p>
              <p className="text-xs text-gray-500">this month</p>
            </div>
            <Target className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => addQuickAction(action)}
              className="p-4 border border-gray-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 text-left"
            >
              <div className="text-2xl mb-2">{action.icon}</div>
              <div className="text-sm font-medium text-gray-900 mb-1">{action.action}</div>
              <div className="text-xs text-emerald-600 font-medium">
                +{action.carbonSaved} kg CO₂ saved
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Add Custom Habit */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Custom Action</h3>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Action</span>
          </button>
        </div>

        {showAddForm && (
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={newHabit.type}
                  onChange={(e) => setNewHabit(prev => ({ ...prev, type: e.target.value as any }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="transport">Transportation</option>
                  <option value="energy">Energy</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="consumption">Consumption</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CO₂ Saved (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  value={newHabit.carbonSaved}
                  onChange={(e) => setNewHabit(prev => ({ ...prev, carbonSaved: Number(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Action Description</label>
              <input
                type="text"
                value={newHabit.action}
                onChange={(e) => setNewHabit(prev => ({ ...prev, action: e.target.value }))}
                placeholder="e.g., Carpooled to work"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details (optional)</label>
              <input
                type="text"
                value={newHabit.description}
                onChange={(e) => setNewHabit(prev => ({ ...prev, description: e.target.value }))}
                placeholder="e.g., Shared ride with 3 colleagues"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div className="flex space-x-3">
              <button
                onClick={addCustomHabit}
                className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Add Action
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Habit History */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Actions</h3>
        
        <div className="space-y-3">
          {habits.map((habit) => (
            <div key={habit.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-full">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{habit.action}</h4>
                  <div className="flex items-center space-x-3 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(habit.type)}`}>
                      {habit.type}
                    </span>
                    <span className="text-sm text-gray-500">
                      {habit.date.toLocaleDateString()}
                    </span>
                    {habit.description && (
                      <span className="text-sm text-gray-500">• {habit.description}</span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className="font-bold text-emerald-600">+{habit.carbonSaved}</div>
                  <div className="text-xs text-gray-500">kg CO₂</div>
                </div>
                <button
                  onClick={() => removeHabit(habit.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}