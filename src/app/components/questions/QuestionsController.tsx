import QuestionsView from "./QuestionsView";
import { questions as initialQuestions } from "@/app/db/questions";
import { useState } from "react";

const QuestionsController = () => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestionClick = () => {
    const updatedQuestions = questions.map((question, index) => {
      if (index === currentQuestionIndex) {
        return { ...question, seen: true };
      }
      return question;
    });
    setQuestions(updatedQuestions);
    const randomIndex = Math.floor(Math.random() * updatedQuestions.length);    

    setCurrentQuestionIndex(randomIndex);
  };

  return (
    <QuestionsView
      questions={questions}
      currentQuestionIndex={currentQuestionIndex}
      handleNextQuestionClick={handleNextQuestionClick}
    />
  );
};

export default QuestionsController;
