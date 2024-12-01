import { dateQuestions } from "@/db/dateQuestions";
import { friendsQuestions } from "@/db/friendsQuestions";
import { workQuestions } from "@/db/workQuestions";
import { holidayQuestions } from "@/db/holidayQuestions";
import { setGameStatus } from "@/lib/features/gameSettingSlice";
import { Question } from "@/lib/types";
import QuestionsView from "./QuestionsView";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";
import { useState } from "react";

const QuestionsController = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { setting } = useAppSelector((state) => state.gameSetting);
  const dispatch = useAppDispatch();

  const shuffleQuestions = (questions: Question[]) => {
    return questions
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  useEffect(() => {
    if (setting === "date") {
      setQuestions(shuffleQuestions(dateQuestions));
    }
    if (setting === "friends") {
      setQuestions(shuffleQuestions(friendsQuestions));
    }
    if (setting === "work") {
      setQuestions(shuffleQuestions(workQuestions));
    }
    if (setting === "holiday") {
      setQuestions(shuffleQuestions(holidayQuestions));
    }
  }, [setting]);

  const handleNextClick = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    if (currentQuestionIndex === questions.length - 1) {
      dispatch(setGameStatus("completed"));
    }
  };

  const handleBackClick = () => {
    if (currentQuestionIndex === 0) {
      dispatch(setGameStatus("notStarted"));
    } else {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  return (
    <QuestionsView
      questions={questions}
      currentQuestionIndex={currentQuestionIndex}
      handleNextClick={handleNextClick}
      handleBackClick={handleBackClick}
    />
  );
};

export default QuestionsController;
