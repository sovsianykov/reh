import {ArticleActionTypes} from "./constants";
import {Day, ListOfDays} from "../constants/constants";
import {Dispatch} from "redux";
import {addDoc, collection, doc, getDocs, updateDoc} from "firebase/firestore";
import {db} from "../firebase/firebase";
import {fromServerBase} from "../utils/fromServerBase";


const usersCollectionRef = collection(db, "daysList");
function helper(day:Day) {
    const A = day.studioColA.map(el => el.color)
    const B = day.studioColB.map(el => el.color)
    const C = day.studioColC.map(el => el.color)
    const D = day.studioColD.map(el => el.color)
    return {
        id: day.id,
        date: day.date,
        studioColA: A,
        studioColB: B,
        studioColC: C,
        studioColD: D,
        isPublished: day.isPublished
    }
}

export const adminAction = {
  updateData(day:Day,daysList:ListOfDays) {
      return async (dispatch: Dispatch) => {
      const newList = helper(day)
          await addDoc(usersCollectionRef, newList);
          dispatch({type: ArticleActionTypes.UPDATE_DATA, payload: daysList});
      }
  },
        rewriteData(day: Day,daysList:Day[],i:number) {
            console.log(daysList, ' updater')
          return  async (dispatch: Dispatch) => {
              const newList = helper(day)

           const x = daysList.map((el,j) =>{
               return (j === i )? day : el
           })
              const userDoc = doc(db, "daysList", newList.id);
              await updateDoc(userDoc, newList);
              console.log(x)
              dispatch({type: ArticleActionTypes.REWRITE_DATA, payload: daysList});


          };


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