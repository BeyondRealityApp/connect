import FinalView from "./FinalView";
import { setGameSetting, setGameStatus } from "@/lib/features/gameSettingSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useTranslations } from "next-intl";

const FinalController = () => {
  const dispatch = useAppDispatch();
  const onRestartClick = () => {
    dispatch(setGameSetting(null));
    dispatch(setGameStatus("notStarted"));
  };
  const t = useTranslations("FinalController");

  const content = {
    description_1: t("description_1"),
    description_2: t("description_2"),
    shareButtonText: t("shareButtonText"),
    restartButtonText: t("restartButtonText"),
  };

  const onShareClick = () => {
    navigator
      .share({
        title: t("shareButton.title"),
        text: t("shareButton.text"),
        url: "https://connect.beyondreality.vision",
      })
      .catch((error) => console.error("Error sharing:", error));
  };
  return (
    <FinalView
      onRestartClick={onRestartClick}
      onShareClick={onShareClick}
      content={content}
    />
  );
};

export default FinalController;
