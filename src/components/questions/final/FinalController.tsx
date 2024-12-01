import FinalView from "./FinalView";
import { setGameSetting, setGameStatus } from "@/lib/features/gameSettingSlice";
import { useAppDispatch } from "@/lib/hooks";

const FinalController = () => {
  const dispatch = useAppDispatch();
  const onRestartClick = () => {
    dispatch(setGameSetting(null));
    dispatch(setGameStatus("notStarted"));
  };
  const onShareClick = () => {
    navigator
      .share({
        title: "Connect",
        text: "I would like to know you better. Let's connect.",
        url: "https://connect.beyondreality.vision",
      })
      .catch((error) => console.error("Error sharing:", error));
  };
  return (
    <FinalView onRestartClick={onRestartClick} onShareClick={onShareClick} />
  );
};

export default FinalController;
