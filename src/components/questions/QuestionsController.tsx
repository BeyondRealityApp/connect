import { dateQuestions } from "@/db/dateQuestions";
import { friendsQuestions } from "@/db/friendsQuestions";
import { workQuestions } from "@/db/workQuestions";
import { yearEndQuestions } from "@/db/yearEndQuestions";
import { setGameStatus } from "@/lib/features/gameSettingSlice";
import { Question } from "@/lib/types";
import QuestionsView from "./QuestionsView";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";
import { useLocale } from "next-intl";
import { useState } from "react";
import { useTranslations } from "next-intl";

const QuestionsController = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [openMenu, setOpenMenu] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { setting } = useAppSelector((state) => state.gameSetting);
  const dispatch = useAppDispatch();
  const t = useTranslations("QuestionsController");
  const locale = useLocale();

  const content = {
    questionProgress: t("questionProgress", {
      current: currentQuestionIndex + 1,
      total: questions.length,
    }),
    nextButtonText: t("nextButtonText"),
    backButtonText: t("backButtonText"),
    restartButtonText: t("restartButtonText"),
  };

  const onMenuClick = () => {
    setOpenMenu((prev) => !prev);
  };

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
    if (setting === "yearEnd") {
      setQuestions(shuffleQuestions(yearEndQuestions));
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

  const onRestartClick = () => {
    dispatch(setGameStatus("notStarted"));
    setCurrentQuestionIndex(0);
  };

  return (
    <QuestionsView
      questions={questions}
      currentQuestionIndex={currentQuestionIndex}
      handleNextClick={handleNextClick}
      handleBackClick={handleBackClick}
      onRestartClick={onRestartClick}
      openMenu={openMenu}
      onMenuClick={onMenuClick}
      content={content}
      locale={locale}
    />
  );
};

export default QuestionsController;
