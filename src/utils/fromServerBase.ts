import {Cell, Day} from "../constants/constants";
import  { option } from "../constants/constants";

 export const fromServerBase =(arrServer:any) => {
 return   arrServer.map((obj:any) => {
       const getColFrom = (col: string[]) => {
           const arr = [];
           for (let i = 0; i < 13; i++) {
               arr[i] = new Cell(col[i],"free");
           }
           return arr;
       }
       const comingDay = new Day(option)
       comingDay.date = obj.data
       comingDay.studioColA = getColFrom(obj.studioColA)
       comingDay.studioColB = getColFrom(obj.studioColB)
       comingDay.studioColC = getColFrom(obj.studioColC)
       comingDay.studioColD = getColFrom(obj.studioColD)
       comingDay.isPublished = obj.isPublished
       return comingDay
       }
   )

 }

