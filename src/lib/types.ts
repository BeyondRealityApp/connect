export interface Question {
  id: string;
  text: {
    [languageCode: string]: string;
  };
  category: string;
  seen: boolean;
}

export type GameSetting = "date" | "friends" | "holiday" | "work" | null;
export type GameStatus = "notStarted" | "inProgress" | "completed";

