import { Day, ListOfDays } from "../constants/constants";

export enum ArticleActionTypes {
  FETCH_START = "FETCH_START",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_FAILURE = "FETCH_FAILURE",
  FETCH_DATA = "FETCH_DATA",
  UPDATE_DATA = "UPDATE_DATA",
  REWRITE_DATA = "REWRITE_DATA",
}
export const query = ["", "album", "musicVideo", "song", "software"];

export interface UpdateDataAction {
  type: ArticleActionTypes.UPDATE_DATA;
  payload: ListOfDays;
}
export interface RewriteDataAction {
  type: ArticleActionTypes.REWRITE_DATA;
  payload: ListOfDays;
}

interface FetchStartAction {
  type: ArticleActionTypes.FETCH_START;
}

interface FetchSuccessAction {
  type: ArticleActionTypes.FETCH_SUCCESS;
  payload: any;
}
interface FetchFailure {
  type: ArticleActionTypes.FETCH_FAILURE;
  payload: string;
}
interface FetchData {
  type: ArticleActionTypes.FETCH_DATA;
  payload: string;
}

export type ArticlesAction =
  | FetchStartAction
  | FetchSuccessAction
  | FetchFailure
  | FetchData
  | RewriteDataAction
  | UpdateDataAction;

export interface DaysState {
  list: Day[];
  loading: boolean;
  error: null | string;
  initialDay: Day;
  initialDaysList: Day[];
}
