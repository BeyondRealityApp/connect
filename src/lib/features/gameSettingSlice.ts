import { createSlice } from "@reduxjs/toolkit";
import type { GameSetting, GameStatus } from "@/lib/types";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GameSettingState {
  setting: GameSetting;
  status: GameStatus;
}

const initialState: GameSettingState = {
  setting: null,
  status: "notStarted",
};

export const gameSettingSlice = createSlice({
  name: "gameSetting",
  initialState,
  reducers: {
    setGameSetting: (state, action: PayloadAction<GameSetting>) => {
      state.setting = action.payload;
    },
    setGameStatus: (state, action: PayloadAction<GameStatus>) => {
      state.status = action.payload;
    },
    initializeGameSetting: (state) => {
      state.setting = null;
      state.status = "notStarted";
    },
  },
});

export const {
  setGameSetting,
  setGameStatus,
  initializeGameSetting,
} = gameSettingSlice.actions;

export default gameSettingSlice.reducer;
