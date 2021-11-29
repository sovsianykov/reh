import {collection} from "firebase/firestore";
import {db} from "../firebase/firebase";
import {Day} from "../constants/constants";

export const usersCollectionRef = collection(db, "daysList");
export function helper(day: Day):any {
    const A = day.studioColA.map((el) => el.color);
    const B = day.studioColB.map((el) => el.color);
    const C = day.studioColC.map((el) => el.color);
    const D = day.studioColD.map((el) => el.color);
    return {
        id: day.id,
        date: day.date,
        studioColA: A,
        studioColB: B,
        studioColC: C,
        studioColD: D,
        isPublished: day.isPublished,
    };
}
