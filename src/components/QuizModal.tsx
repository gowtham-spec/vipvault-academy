import { useState } from "react";
import { motion } from "framer-motion";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (score: number) => void;
  lessonTitle: string;
  questions: QuizQuestion[];
}

const QuizModal = ({ isOpen, onClose, onComplete, lessonTitle, questions }: QuizModalProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  const handleCompleteQuiz = () => {
    const score = calculateScore();
    onComplete(score);
    setQuizComplete(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizComplete(false);
  };

  const handleClose = () => {
    resetQuiz();
    onClose();
  };

  if (!isOpen) return null;

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const score = calculateScore();
  const passed = score >= 70;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-background rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Quiz: {lessonTitle}</h2>
            <p className="text-muted-foreground">Test your understanding</p>
          </div>
          <Button variant="ghost" size="icon" onClick={handleClose}>
            <X size={20} />
          </Button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {!showResults && !quizComplete ? (
            <>
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Question */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {questions[currentQuestion]?.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={selectedAnswers[currentQuestion]?.toString()}
                    onValueChange={(value) => handleAnswerSelect(currentQuestion, parseInt(value))}
                  >
                    {questions[currentQuestion]?.options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={selectedAnswers[currentQuestion] === undefined}
                >
                  {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next"}
                </Button>
              </div>
            </>
          ) : showResults && !quizComplete ? (
            <>
              {/* Results */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  passed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {passed ? <CheckCircle size={32} /> : <AlertCircle size={32} />}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {passed ? 'Congratulations!' : 'Keep Learning!'}
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Your Score: <span className="font-bold text-foreground">{score}%</span>
                </p>
                <p className="text-muted-foreground">
                  {passed 
                    ? 'You have successfully completed this quiz!' 
                    : 'You need 70% or higher to pass. Try again!'}
                </p>
              </div>

              {/* Question Review */}
              <div className="space-y-4 mb-6">
                {questions.map((question, index) => {
                  const userAnswer = selectedAnswers[index];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <Card key={index} className={`border-l-4 ${
                      isCorrect ? 'border-l-green-500' : 'border-l-red-500'
                    }`}>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-base">
                            {index + 1}. {question.question}
                          </CardTitle>
                          {isCorrect ? (
                            <CheckCircle className="text-green-500" size={20} />
                          ) : (
                            <AlertCircle className="text-red-500" size={20} />
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <p>
                            <span className="font-medium">Your answer:</span>{" "}
                            <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                              {question.options[userAnswer]}
                            </span>
                          </p>
                          {!isCorrect && (
                            <p>
                              <span className="font-medium">Correct answer:</span>{" "}
                              <span className="text-green-600">
                                {question.options[question.correctAnswer]}
                              </span>
                            </p>
                          )}
                          {question.explanation && (
                            <p className="text-muted-foreground mt-2">
                              <span className="font-medium">Explanation:</span> {question.explanation}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4">
                <Button variant="outline" onClick={resetQuiz}>
                  Retake Quiz
                </Button>
                <Button onClick={handleCompleteQuiz}>
                  {passed ? 'Complete Lesson' : 'Continue Learning'}
                </Button>
              </div>
            </>
          ) : (
            /* Quiz Complete */
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lesson Complete!</h3>
              <p className="text-muted-foreground mb-6">
                Your progress has been saved. Continue to the next lesson when you're ready.
              </p>
              <Button onClick={handleClose}>Continue</Button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default QuizModal;