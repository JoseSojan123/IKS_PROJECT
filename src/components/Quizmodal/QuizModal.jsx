import React, { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const QuizModal = ({ fort, onClose }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const generateQuiz = async () => {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `Create 5 multiple choice questions about ${fort.name} using this information:
Location: ${fort.location}
History: ${fort.history}
Elevation: ${fort.elevation}

Format each question exactly like this example, with no special characters:
1. What is the height of Mount Everest?
a) 7,000 meters
b) 8,848 meters (CORRECT)
c) 9,000 meters
d) 8,000 meters

2. Which country is Mount Everest located in?
a) India
b) China
c) Nepal (CORRECT)
d) Bhutan`
                    },
                  ],
                },
              ],
            }),
          }
        );

        const data = await response.json();
        const textResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!textResponse) {
          throw new Error("No response from API");
        }

        const questionBlocks = textResponse.split(/\d+\./g).filter(Boolean);
        const parsedQuestions = questionBlocks.map(block => {
          const lines = block.trim().split('\n');
          const questionText = lines[0].trim();
          const options = lines.slice(1).map(line => {
            const option = line.trim();
            const text = option.substring(3).replace('(CORRECT)', '').trim();
            return {
              text,
              isCorrect: option.includes('(CORRECT)')
            };
          }).filter(option => option.text);

          return { question: questionText, options };
        }).filter(q => q.question && q.options.length === 4);

        setQuestions(parsedQuestions);
      } catch (error) {
        console.error("Error generating quiz:", error);
        setQuestions([]);
      } finally {
        setLoading(false);
      }
    };

    generateQuiz();
  }, [fort]);

  const handleAnswerClick = (isCorrect) => {
    setSelectedAnswer(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 font-serif">
      <div className="bg-gradient-to-br from-yellow-100 to-amber-200 border-[3px] border-[#7B3F00] shadow-2xl rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#4B2E1D]">{fort.name} Heritage Quiz</h2>
          <button
            onClick={onClose}
            className="text-[#7B3F00] hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#8B5E3C]"></div>
          </div>
        ) : showScore ? (
          <div className="text-center text-[#4B2E1D]">
            <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
            <p className="text-xl mb-6">
              Your score: {score} out of {questions.length}
            </p>
            <button
              onClick={resetQuiz}
              className="bg-[#8B5E3C] hover:bg-[#7A4B2D] text-white px-6 py-2 rounded-lg mr-4"
            >
              Try Again
            </button>
            <button
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        ) : questions.length > 0 ? (
          <div>
            <div className="mb-8 text-[#3D2B1F]">
              <p className="text-sm text-[#5B3A29] mb-2">
                Question {currentQuestion + 1} of {questions.length}
              </p>
              <h3 className="text-lg font-semibold mb-4">
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(option.isCorrect)}
                    className={`w-full text-left p-3 rounded-lg transition-colors border border-[#A67B5B] ${
                      selectedAnswer === null
                        ? 'bg-white hover:bg-amber-100'
                        : option.isCorrect
                        ? 'bg-green-500 text-white'
                        : 'bg-red-200'
                    }`}
                    disabled={selectedAnswer !== null}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-[#7B3F00]">
            Failed to generate quiz questions. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default QuizModal;
