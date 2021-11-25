// export const BASE_URL2 =
//   "https://chroniclingamerica.loc.gov/suggest/titles/?q=";
import {Day, ListOfDays} from "../constants/constants";

export const BASE_URL = "https://itunes.apple.com/search?term=";
export enum ArticleActionTypes {
  FETCH_START = "FETCH_START",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_FAILURE = "FETCH_FAILURE",
  FETCH_DATA = "FETCH_DATA",
  UPDATE_DATA = "UPDATE_DATA"
}
export const query = ["", "album", "musicVideo", "song", "software"];

export interface UpdateDataAction {
  type: ArticleActionTypes.UPDATE_DATA;
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
  | UpdateDataAction;

export interface Artist {
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  collectionViewUrl: string;
  country: string;
  currency: string;
  discCount: number;
  discNumber: number;
  isStreamable: boolean;
  kind: string;
  previewUrl: string;
  primaryGenreName: string;
  releaseDate: Date;
  trackCensoredName: string;
  trackCount: number;
  trackExplicitness: string;
  trackId: number;
  trackName: string;
  trackNumber: number;
  trackPrice: number;
  trackTimeMillis: number;
  trackViewUrl: string;
  wrapperType: string;
}
export interface List {
  resultCount?: number;
  results: Artist[];
}
export interface DaysState {
  list: Day[]| null;
  loading: boolean;
  error: null | string;
  initialDay: Day;
   initialDaysList: Day[];
}
