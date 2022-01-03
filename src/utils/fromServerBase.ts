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

export const fromServerBase = (response: ResponseType[]) => {
  return response.map((day) => {
    const getColFrom = (col: string[]) => {
      const cells = [];
      for (let i = 0; i < 13; i++) {
        cells[i] = new Cell(col[i + 1]);
      }
      return cells;
    };

    const option = {
      id: day.id,
      date: day.date,
      studioColA: getColFrom(day.studioColA),
      studioColB: getColFrom(day.studioColB),
      studioColC: getColFrom(day.studioColC),
      studioColD: getColFrom(day.studioColD),
      isPublished: day.isPublished,
    };
    return new Day(option);
  });
};
