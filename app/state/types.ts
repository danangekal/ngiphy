import { Dispatch, ReactNode } from 'react';

import { AppAction } from './action';

export interface AppState {
  /**
   * props of keyword search
   */
  keyword: string;
  /**
   * props of rating search
   */
  rating: string;
}

export interface AppProviderProps {
  /**
   * children element
   */
  children: ReactNode;
}

export interface AppContextValue {
  /**
   * all state on app
   */
  state: AppState;
  /**
   * all dispacth on app
   */
  dispatch: Dispatch<AppAction>;
}
