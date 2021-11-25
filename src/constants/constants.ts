import { Hour } from "./models";
import moment from "moment";
import "moment/locale/pt-br";
export enum Colour {
  free = "#034d4d",
  reserv = "#F07427",
  busy = "#D32F2F",
  info = "#CCC",
  white = "#FFF",
}
export type Color =
  | Colour.free
  | Colour.reserv
  | Colour.busy
  | Colour.info
  | string;
const statusMap = {
  [Colour.free] : "free",
  [Colour.reserv] : "reserv",
  [Colour.busy] : "free",
  [Colour.free] : "free",
}


export interface Cell {
  fontColor: Colour.free | Colour.white;
  color: Color;
  time?: Hour;
  studio?: "A" | "B" | "C" | "D";
}

export class Cell {
  constructor(color: Color, time?: Hour) {
    this.color = color;
    this.time = time;
    this.fontColor = Colour.free;
  }

  get status() {
    if (this.color === "#034d4d")  return "free"
    if (this.color === "#F07427")  return "reserv"
    if (this.color === "#D32F2F")  return "busy"
    if (this.color === "#f4f1f1")  return "B"
    if (this.color === "#f3c56c")  return "C"
    if (this.color === "#f3c56e")  return "D"
      return "A"
  }
}

export const onColorChange = (color: Color) => {
  if (color === "#034d4d") return "#F07427";
  if (color === "#F07427") return "#D32F2F";
  if (color === "#D32F2F") return "#034d4d";
  return "#CCC";
};
export const onFontColorChange = (color: Color) => {
  if (color === "#034d4d") return "#034d4d";
  if (color === "#F07427") return "#FFF";
  if (color === "#D32F2F") return "#FFF";
  return "#034d4d";
};

export interface Options {
  date: Date | string | number | moment.Moment;
  studioColA: Cell[];
  studioColB: Cell[];
  studioColC: Cell[];
  studioColD: Cell[];
}
export interface Day {
  date: Date | string | number | moment.Moment;
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
    this.cell = { color: Colour.free, status: "free", fontColor: Colour.free };
    this[Col.studioColA] = [
      { studio: "A", status: "A", color: Colour.info, fontColor: Colour.free },
      ...options.studioColA,
    ];
    this[Col.studioColB] = [
      { studio: "B", status: "B", color: Colour.info, fontColor: Colour.free },
      ...options.studioColB,
    ];
    this[Col.studioColC] = [
      { studio: "C", status: "C", color: Colour.info, fontColor: Colour.free },
      ...options.studioColC,
    ];
    this[Col.studioColD] = [
      { studio: "D", status: "D", color: Colour.info, fontColor: Colour.free },
      ...options.studioColD,
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
    arr[i] = new Cell(Colour.free);
  }
  return arr;
};

export const option = {
  date: moment().format("DD/MM-YYYY"),
  studioColA: getCol(),
  studioColB: getCol(),
  studioColC: getCol(),
  studioColD: getCol(),
};
export const initialDay = new Day(option);

export type ListOfDays = Day[];
const getInitialListOfDays = (number: number) => {
  const list: Day[] = [];
  for (let i = 0; i < number; i++) {
    list[i] = new Day({
      date: moment().add(i, "days").format("DD/MM-YYYY"),
      studioColA: getCol(),
      studioColB: getCol(),
      studioColC: getCol(),
      studioColD: getCol(),
    });
  }
  return list;
};
export const initialDaysList: Day[] = getInitialListOfDays(14);
