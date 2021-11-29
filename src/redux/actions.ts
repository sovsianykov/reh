import { ArticleActionTypes } from "./constants";
import {Day, ListOfDays} from "../constants/constants";
import { Dispatch } from "redux";
import {
  addDoc,
  doc,
  getDocs,
  updateDoc,
    deleteDoc
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { fromServerBase } from "../utils/fromServerBase";
import {helper, usersCollectionRef} from "../utils/utils";


export const adminAction = {
  login(login:boolean) {
    return async (dispatch: Dispatch) => {
      console.log(login)
      dispatch({ type: ArticleActionTypes.LOGIN, payload: login });
    };
  },
  updateData(day: Day, daysList: ListOfDays) {
    return async (dispatch: Dispatch) => {
      const newList = helper(day);
      await addDoc(usersCollectionRef, newList);
      dispatch({ type: ArticleActionTypes.UPDATE_DATA, payload: daysList });
    };
  },
  deleteData(day: Day, daysList: ListOfDays) {
    return async (dispatch: Dispatch) => {
      const userDoc = doc(db, "daysList", day.id);
      await deleteDoc(userDoc);
      dispatch({ type: ArticleActionTypes.DELETE_DATA, payload: daysList });
    };
  },
  rewriteData(day: Day, daysList: Day[]) {
    console.log(daysList, " updater");
    return async (dispatch: Dispatch) => {
      const newList = helper(day);

      const userDoc = doc(db, "daysList", newList.id);
      await updateDoc(userDoc, newList);

      dispatch({ type: ArticleActionTypes.REWRITE_DATA, payload: daysList });
    };
  },
};

export const apiAction = {
  fetchStart() {
    return { type: ArticleActionTypes.FETCH_START };
  },
  fetchSuccess() {
    return async (dispatch: Dispatch) => {
      try {
        const data = await getDocs(usersCollectionRef);
        let response: any[] = [];
        if (data) {
          response = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        }
        dispatch({
          type: ArticleActionTypes.FETCH_SUCCESS,
          payload: fromServerBase(response),
        });
      } catch (e) {
        errorMessage();
      }
    };
  },
};
function errorMessage() {
  return {
    type: ArticleActionTypes.FETCH_FAILURE,
  };
}
