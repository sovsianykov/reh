import { BASE_URL, ArticleActionTypes, List, query } from "./constants";

export const apiAction = {
  fetchStart() {
    return { type: ArticleActionTypes.FETCH_START };
  },
  fetchSuccess(data: List) {
    return { type: ArticleActionTypes.FETCH_SUCCESS, payload: data };
  },
  errorMessage() {
    return {
      type: ArticleActionTypes.FETCH_FAILURE,
      payload: "Something vent wrong!",
    };
  },
  fetchData(uri: string, id: number) {

    return {
      type: ArticleActionTypes.FETCH_DATA,
      url: `${BASE_URL}${uri}&limit=200&entity=${query[id]}`,
    };
  },
};
