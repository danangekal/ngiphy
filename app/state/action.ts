export enum ActionType {
  SetKeyword,
  SetRating,
}

export interface SetKeyword {
  type: ActionType.SetKeyword;
  payload: string;
}

export interface SetRating {
  type: ActionType.SetRating;
  payload: string;
}

export type AppAction = SetKeyword | SetRating;
