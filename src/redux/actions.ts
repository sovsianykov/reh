
import {ArticleActionTypes} from "./constants";
import {Day, ListOfDays} from "../constants/constants";
import {Dispatch} from "redux";
import {addDoc, collection,getDocs} from "firebase/firestore";
import {db} from "../firebase/firebase";
import {fromServerBase} from "../utils/fromServerBase";

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
  fetchSuccess()
  {return async (dispatch:Dispatch) => {
            try {
                const data = await getDocs(usersCollectionRef);
                let response:any[] = [];
                if (data) {
                    response = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                }
                console.log( "new List",fromServerBase(response))
                dispatch({ type: ArticleActionTypes.FETCH_SUCCESS, payload: fromServerBase(response) });
            } catch (e) {
                errorMessage();
            }

        } ;
  },
};
function errorMessage() {
    return {
        type: ArticleActionTypes.FETCH_FAILURE,
    };
}