import {
  ActionType,
  AppAction,
  SetKeyword,
  SetPage,
  SetRating,
} from './action';
import { AppState } from './types';

export function appReducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case ActionType.SetPage:
      return { ...state, page: action.payload };
    case ActionType.SetKeyword:
      return { ...state, keyword: action.payload };
    case ActionType.SetRating:
      return { ...state, rating: action.payload };

    default:
      return state;
  }
}

export const setPage = (payload: number): SetPage => ({
  type: ActionType.SetPage,
  payload,
});

export const setKeyword = (payload: string): SetKeyword => ({
  type: ActionType.SetKeyword,
  payload,
});

export const setRating = (payload: string): SetRating => ({
  type: ActionType.SetRating,
  payload,
});
