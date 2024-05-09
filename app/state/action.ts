export enum ActionType {
  SetPage,
  SetKeyword,
  SetRating,
}

export interface SetPage {
  type: ActionType.SetPage;
  payload: number;
}

export interface SetKeyword {
  type: ActionType.SetKeyword;
  payload: string;
}

export interface SetRating {
  type: ActionType.SetRating;
  payload: string;
}

export type AppAction = SetPage | SetKeyword | SetRating;
