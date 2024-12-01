"use client";

import { setOnline } from "@/lib/features/onlineSlice";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";

type OnlineProviderProps = Readonly<{
  children: React.ReactNode;
}>;

const OnlineProvider: React.FC<OnlineProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const handleOnline = () => {
      dispatch(setOnline(true));
    };
    const handleOffline = () => {
      dispatch(setOnline(false));
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [dispatch]);

  return <>{children}</>;
};

export default OnlineProvider;
