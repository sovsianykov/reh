import { Hour } from "./models";

export interface cell {
  status: "free" | "reserved" | "busy" | "info";
  color: "#00E131" | "yellow" | "red" | "#CCC";
  time?: Hour;
  studio?: "A" | "B" | "C" | "D";
}
export interface Options {
  date: Date | string | number;
  ColA: cell[];
  ColB: cell[];
  ColC: cell[];
  ColD: cell[];
}
export interface Day {
  date: Date | string | number;
  studioColA: cell[];
  studioColB: cell[];
  studioColC: cell[];
  studioColD: cell[];
  timeCol: string[];
  isPublished?: boolean;
}
export class Day {
  constructor(options: Options) {
    this.date = options.date;
    this.studioColA = [
      { studio: "A", status: "info", color: "#CCC" },
      ...options.ColA,
    ];
    this.studioColB = [
      { studio: "B", status: "info", color: "#CCC" },
      ...options.ColB,
    ];
    this.studioColC = [
      { studio: "C", status: "info", color: "#CCC" },
      ...options.ColC,
    ];
    this.studioColD = [
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
let cell:cell = {status:"free",color:"#00E131"}
let col:cell[] = [
  cell,
  cell,
  cell,
  cell,
  cell,
  cell,
  cell,
  cell,
  cell,
  cell,
  cell,
  cell,
  cell,
]

const option = {
  date: Date.now(),
  ColA: col,
  ColB: col,
  ColC: col,
  ColD: col,
}
export  const initialDay = new Day(option)