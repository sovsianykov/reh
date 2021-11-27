import {Cell, Day} from "../constants/constants";


export const fromServerBase =(arrServer:any) => {
 return   arrServer.map((obj:any) => {
       const getColFrom = (col: string[]) => {
           const arr = [];
           for (let i = 0; i < 13; i++) {
               arr[i] = new Cell(col[i+1]);
           }
           return arr;
       }

       const option = {
           id: obj.id,
           date : obj.date,
           studioColA : getColFrom(obj.studioColA),
           studioColB : getColFrom(obj.studioColB),
           studioColC : getColFrom(obj.studioColC),
           studioColD :getColFrom(obj.studioColD),
           isPublished : obj.isPublished,
       }
     console.log(new Day(option),'server')
     return new Day(option)
       }
   )

 }

