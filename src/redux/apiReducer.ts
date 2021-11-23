import { ArticlesAction, ArticleActionTypes, DaysState } from "./constants";
import { initialDay } from "../constants/constants";

const initialState: DaysState = {
  list: null,
  loading: false,
  error: null,
  initialDay: initialDay,
};

function apiReducer(state = initialState, action: ArticlesAction): DaysState {
  switch (action.type) {
    case ArticleActionTypes.FETCH_START:
      return { ...state, list: null, loading: true, error: null };
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
        list: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default apiReducer;
