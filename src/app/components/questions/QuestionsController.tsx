import QuestionsView from "./QuestionsView";
import { dateQuestions as initialQuestions } from "@/app/db/questions";
import { useState } from "react";

export type SettingOption = "date" | "friends" | "family" | null;

const QuestionsController = () => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [settingOption, setSettingOption] = useState<SettingOption>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const onStartClick = (settingOption: SettingOption) => {
    setSettingOption(settingOption);
  };

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
      onStartClick={onStartClick}
      settingOption={settingOption}
      questions={questions}
      currentQuestionIndex={currentQuestionIndex}
      handleNextQuestionClick={handleNextQuestionClick}
    />
  );
};

export default QuestionsController;
