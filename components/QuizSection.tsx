
import React, { useState } from 'react';
import { Question, SkillLevel, QuizResult } from '../types';

const questions: Question[] = [
  {
    id: 1,
    text: "How many years of organized volleyball experience do you have?",
    options: [
      { text: "Less than 1 year", value: 1 },
      { text: "1 to 3 years", value: 2 },
      { text: "4 or more years", value: 3 },
    ],
  },
  {
    id: 2,
    text: "How comfortable are you with court rotations and rules?",
    options: [
      { text: "I'm still learning where to stand", value: 1 },
      { text: "I understand standard 5-1 or 6-2 systems", value: 2 },
      { text: "I can adjust to complex tactical switches easily", value: 3 },
    ],
  },
  {
    id: 3,
    text: "Which best describes your serving ability?",
    options: [
      { text: "I mostly do underhand or basic overhand", value: 1 },
      { text: "I can consistently hit deep float serves", value: 2 },
      { text: "I have a reliable jump float or top-spin serve", value: 3 },
    ],
  },
  {
    id: 4,
    text: "What is your primary focus during a defensive play?",
    options: [
      { text: "Just trying to keep the ball off the ground", value: 1 },
      { text: "Following my base position and reading the setter", value: 2 },
      { text: "Reading the hitter's shoulder and adjusting block coverage", value: 3 },
    ],
  },
  {
    id: 5,
    text: "Have you specialized in a specific position (OH, S, MB, etc.)?",
    options: [
      { text: "Not yet, I play everywhere", value: 1 },
      { text: "Yes, I know my role but I'm still refining it", value: 2 },
      { text: "Yes, I have deep technical knowledge of my specific position", value: 3 },
    ],
  },
];

const QuizSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: number[]) => {
    const score = finalAnswers.reduce((acc, curr) => acc + curr, 0);
    let level = SkillLevel.BEGINNER;

    if (score >= 12) {
      level = SkillLevel.ADVANCED;
    } else if (score >= 8) {
      level = SkillLevel.INTERMEDIATE;
    }

    setResult({ level, score });
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <section id="quiz" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skill Assessment Quiz</h2>
          <p className="text-gray-600">Determine your level to get the best coaching advice for your current game.</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 min-h-[400px] flex flex-col justify-center">
          {!result ? (
            <div className="animate-fade-in">
              <div className="mb-8">
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
                <div className="w-full bg-gray-200 h-2 mt-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-teal-600 h-full transition-all duration-300" 
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                {questions[currentQuestionIndex].text}
              </h3>

              <div className="space-y-4">
                {questions[currentQuestionIndex].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full text-left p-4 bg-white border border-gray-200 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 group-hover:border-teal-500 group-hover:bg-teal-600 group-hover:text-white mr-4 transition-colors">
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-teal-900">{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center animate-fade-in">
              <div className="mb-6 inline-flex p-4 bg-teal-100 rounded-full">
                <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h3>
              <p className="text-gray-600 mb-6">Based on your answers, your current level is:</p>
              
              <div className="inline-block px-8 py-4 bg-teal-600 text-white rounded-2xl text-3xl font-bold shadow-lg mb-8">
                {result.level}
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#quickHelp"
                  className="bg-gray-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition"
                >
                  View My Level's Guide
                </a>
                <button
                  onClick={resetQuiz}
                  className="bg-white text-gray-600 border border-gray-200 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
