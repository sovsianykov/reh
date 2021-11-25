
import {BASE_URL, ArticleActionTypes, List, query} from "./constants";
import {Day, ListOfDays} from "../constants/constants";
import {Dispatch} from "redux";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../firebase/firebase";

const usersCollectionRef = collection(db, "daysList");


export const adminAction = {
  updateData(day:Day,daysList:ListOfDays) {
    return async (dispatch:Dispatch) => {
        const A = day.studioColA.map(el => el.color)
        const B = day.studioColB.map(el => el.color)
        const C = day.studioColC.map(el => el.color)
        const D = day.studioColD.map(el => el.color)
        const newList = {
          date: day.date,
          studioColA : A,
          studioColB : B,
          studioColC : C,
          studioColD : D,
          isPublished: day.isPublished
        }
        await addDoc(usersCollectionRef, newList);
        dispatch({ type: ArticleActionTypes.UPDATE_DATA, payload: daysList });
      }

}}


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
