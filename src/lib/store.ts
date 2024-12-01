import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./features/gameSettingSlice";
import onlineReducer from "./features/onlineSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
        gameSetting: gameReducer,
        online: onlineReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
