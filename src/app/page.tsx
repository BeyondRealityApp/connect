"use client";

import FinalController from "@/components/questions/final/FinalController";
import LandingController from "../components/landing/LandingController";
import QuestionsController from "@/components/questions/QuestionsController";
import { useAppSelector } from "@/lib/hooks";
import WizardController from "@/components/wizard/WizardController";

export default function Home() {
  const { online } = useAppSelector((state) => state.online);
  const { status } = useAppSelector((state) => state.gameSetting);

  return (
    <>
      {online && <LandingController />}
      {!online && status === "notStarted" && <WizardController />}
      {!online && status === "inProgress" && <QuestionsController />}
      {!online && status === "completed" && <FinalController />}
    </>
  );
}
