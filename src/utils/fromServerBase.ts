import { Cell, Day } from "../constants/constants";
interface ResponseType {
  id: string;
  date: string;
  studioColA: string[];
  studioColB: string[];
  studioColC: string[];
  studioColD: string[];
  isPublished: boolean;
}
const getColFrom = (col: string[]) => {
  return col.map((cell, i, col) => new Cell(col[i])).splice(1, 13);
};

export const fromServerBase = (response: ResponseType[]) => {
  return response.map(
    (day) =>
      new Day({
        id: day.id,
        date: day.date,
        studioColA: getColFrom(day.studioColA),
        studioColB: getColFrom(day.studioColB),
        studioColC: getColFrom(day.studioColC),
        studioColD: getColFrom(day.studioColD),
      })
  );
};
