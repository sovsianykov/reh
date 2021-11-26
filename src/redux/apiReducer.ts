import {ArticleActionTypes, ArticlesAction, DaysState} from "./constants";
import {initialDay, initialDaysList} from "../constants/constants";

const initialState: DaysState = {
  list: [],
  loading: false,
  error: null,
  initialDay: initialDay,
  initialDaysList: initialDaysList
};

function apiReducer(state = initialState, action: ArticlesAction): DaysState {
  switch (action.type) {
    case ArticleActionTypes.FETCH_START:
      return { ...state, loading: true, error: null };
    case ArticleActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null,
      };
    case ArticleActionTypes.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ArticleActionTypes.UPDATE_DATA:
      return  {
        ...state,
        initialDaysList: action.payload,
      };
    default:
      return state;
  }
}

export default apiReducer;
