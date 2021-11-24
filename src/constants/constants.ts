import { Hour } from "./models";
import  moment from 'moment';
import 'moment/locale/pt-br';
type Color = "#00E131" | "yellow" | "red" | "#CCC";
type Status = "free" | "reserved" | "busy" | "info";
export interface Cell {
  status: "free" | "reserved" | "busy" | "info";
  color: Color;
  time?: Hour;
  studio?: "A" | "B" | "C" | "D";
}

export class Cell {
  constructor(color: Color, status: Status, time?: Hour) {
    this.color = color;
    this.status = status;
    this.time = time;
  }
}

export const onColorChange = (color: Color) => {
  if (color === "#00E131") return "yellow";
  if (color === "yellow") return "red";
  if (color === "red") return "#00E131";
  return "#00E131";
};

export interface Options {
  date: Date | string | number | moment.Moment;
  ColA: Cell[];
  ColB: Cell[];
  ColC: Cell[];
  ColD: Cell[];
}
export interface Day {
  date: Date | string | number | moment.Moment ;
  cell: Cell;
  studioColA: Cell[];
  studioColB: Cell[];
  studioColC: Cell[];
  studioColD: Cell[];
  timeCol: string[];
  isPublished?: boolean;
}
export const enum Col {
  studioColA = "studioColA",
  studioColB = "studioColB",
  studioColC = "studioColC",
  studioColD = "studioColD",
}
export class Day {
  constructor(options: Options) {
    this.date = options.date;
    this.cell = { color: "#00E131", status: "free" };
    this[Col.studioColA] = [
      { studio: "A", status: "info", color: "#CCC" },
      ...options.ColA,
    ];
    this[Col.studioColB] = [
      { studio: "B", status: "info", color: "#CCC" },
      ...options.ColB,
    ];
    this[Col.studioColC] = [
      { studio: "C", status: "info", color: "#CCC" },
      ...options.ColC,
    ];
    this[Col.studioColD] = [
      { studio: "D", status: "info", color: "#CCC" },
      ...options.ColD,
    ];
    this.timeCol = [
      "studio",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
    ];
    this.isPublished = false;
  }
}
const getCol = () => {
  const arr = [];
  for (let i = 0; i < 13; i++) {
    arr[i] = new Cell("#00E131", "free");
  }
  return arr;
};

const option = {

  date: moment().format('DD/MM-YYYY'),
  ColA: getCol(),
  ColB: getCol(),
  ColC: getCol(),
  ColD: getCol(),
};
export const initialDay = new Day(option);

export type ListOfDays = Day[];
const getInitialListOfDays =(number:number) => {
  const list:Day[] = []
  for (let i = 0; i < number; i++) {
    list[i] = new Day({
      date: moment().add(i,'days').format('DD/MM-YYYY'),
      ColA: getCol(),
      ColB: getCol(),
      ColC: getCol(),
      ColD: getCol()
    }
  )
  }
  return list;
}
export const initialDaysList:Day[] = getInitialListOfDays(14)