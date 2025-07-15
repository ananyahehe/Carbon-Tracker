import React, { useState } from 'react';
import { BookOpen, Award, Clock, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { getRandomQuiz, QUIZ_QUESTIONS } from '../utils/quizData';
import { EXPERT_TIPS } from '../utils/expertTips';
import { QuizQuestion } from '../types';

export default function EducationHub() {
  const [activeTab, setActiveTab] = useState<'tips' | 'quiz'>('tips');
  const [currentQuiz, setCurrentQuiz] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const startQuiz = (difficulty?: 'beginner' | 'intermediate' | 'advanced') => {
    const quiz = getRandomQuiz(difficulty);
    setCurrentQuiz(quiz);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === currentQuiz[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < currentQuiz.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz([]);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-4 mb-4">
          <BookOpen className="w-8 h-8" />
          <h2 className="text-2xl font-bold">Climate Education Hub</h2>
        </div>
        <p className="text-blue-100">
          Expand your climate knowledge with expert insights and interactive quizzes
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'tips', label: 'Expert Tips', icon: BookOpen },
              { id: 'quiz', label: 'Knowledge Quiz', icon: Award }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                  activeTab === id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'tips' && (
            <div className="space-y-6">
              {EXPERT_TIPS.map((tip) => (
                <div key={tip.id} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{tip.readTime} min read</span>
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          tip.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                          tip.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {tip.difficulty}
                        </span>
                        <span className="text-emerald-600 font-medium">
                          {tip.potentialSaving} kg CO₂/year savings
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">{tip.content}</p>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{tip.author}</p>
                        <p className="text-sm text-gray-600">{tip.authorTitle}</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {tip.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="space-y-6">
              {currentQuiz.length === 0 ? (
                <div className="text-center space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">Test Your Climate Knowledge</h3>
                  <p className="text-gray-600">Choose a difficulty level to start your quiz</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { level: 'beginner', title: 'Beginner', description: 'Basic climate concepts', color: 'green' },
                      { level: 'intermediate', title: 'Intermediate', description: 'Detailed climate science', color: 'yellow' },
                      { level: 'advanced', title: 'Advanced', description: 'Expert-level knowledge', color: 'red' }
                    ].map(({ level, title, description, color }) => (
                      <button
                        key={level}
                        onClick={() => startQuiz(level as any)}
                        className={`p-6 border-2 rounded-xl hover:border-${color}-400 transition-all duration-200 ${
                          color === 'green' ? 'border-green-200 hover:bg-green-50' :
                          color === 'yellow' ? 'border-yellow-200 hover:bg-yellow-50' :
                          'border-red-200 hover:bg-red-50'
                        }`}
                      >
                        <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
                        <p className="text-sm text-gray-600">{description}</p>
                        <div className={`mt-3 px-3 py-1 rounded-full text-xs font-medium ${
                          color === 'green' ? 'bg-green-100 text-green-700' :
                          color === 'yellow' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          5 questions
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : quizCompleted ? (
                <div className="text-center space-y-6">
                  <div className="text-6xl mb-4">
                    {score === currentQuiz.length ? '🏆' : score >= currentQuiz.length * 0.8 ? '🥇' : score >= currentQuiz.length * 0.6 ? '🥈' : '📚'}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Quiz Complete!</h3>
                  <div className="text-4xl font-bold text-blue-600">
                    {score}/{currentQuiz.length}
                  </div>
                  <p className="text-gray-600">
                    {score === currentQuiz.length ? 'Perfect score! You\'re a climate expert!' :
                     score >= currentQuiz.length * 0.8 ? 'Excellent knowledge! Keep it up!' :
                     score >= currentQuiz.length * 0.6 ? 'Good job! Room for improvement.' :
                     'Keep learning! Every expert started somewhere.'}
                  </p>
                  
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={resetQuiz}
                      className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Try Another Quiz
                    </button>
                    <button
                      onClick={() => startQuiz()}
                      className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                    >
                      Random Quiz
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Progress Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Question {currentQuestion + 1} of {currentQuiz.length}
                    </h3>
                    <button
                      onClick={resetQuiz}
                      className="flex items-center space-x-1 text-gray-500 hover:text-gray-700"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reset</span>
                    </button>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / currentQuiz.length) * 100}%` }}
                    />
                  </div>

                  {/* Question */}
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      {currentQuiz[currentQuestion]?.question}
                    </h4>

                    <div className="space-y-3">
                      {currentQuiz[currentQuestion]?.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(index)}
                          disabled={showResult}
                          className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                            showResult
                              ? index === currentQuiz[currentQuestion].correctAnswer
                                ? 'border-green-500 bg-green-50 text-green-800'
                                : index === selectedAnswer
                                  ? 'border-red-500 bg-red-50 text-red-800'
                                  : 'border-gray-200 bg-gray-50 text-gray-500'
                              : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{option}</span>
                            {showResult && (
                              <div>
                                {index === currentQuiz[currentQuestion].correctAnswer ? (
                                  <CheckCircle className="w-5 h-5 text-green-500" />
                                ) : index === selectedAnswer ? (
                                  <XCircle className="w-5 h-5 text-red-500" />
                                ) : null}
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {showResult && (
                      <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                        <h5 className="font-semibold text-gray-900 mb-2">Explanation:</h5>
                        <p className="text-gray-700">{currentQuiz[currentQuestion].explanation}</p>
                        
                        <button
                          onClick={nextQuestion}
                          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          {currentQuestion < currentQuiz.length - 1 ? 'Next Question' : 'Finish Quiz'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}