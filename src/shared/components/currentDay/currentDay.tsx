import React, { FunctionComponent, useCallback, useState } from "react";
import "moment/locale/pt-br";
import { createStyles, makeStyles } from "@mui/styles";
import theme from "../../../constants/theme";
import { Day, onColorChange } from "../../../constants/constants";
import {Paper} from "@mui/material";
interface CurrentDayProps {
  myDay: Day;
}
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 368,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      overflow: "hidden",
      margin: theme.spacing(0.5),
    },
    column: {
      width: 72,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    cell: {
      width: "100%",
      marginBottom: theme.spacing(0.25),
      height: 30,
        display:'flex',
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontWeight: 400,
      fontSize: "18px",
      padding: " 0 6px",
      letterSpacing: 0.6,
      // border: ".5px solid #000",
      background: "#d5d4d4",
      cursor: "pointer",
    },
    date: {
      width: 368,
      height: 50,
      padding: 5,
      fontSize: "20px",
      textAlign: "center",
        lineHeight: '40px',
        letterSpacing: 0.6,
        // border: ".5px solid #000",
        background: "#d5d4d4",
    },
      wrapper :{
          width: 376,
          paddingTop: 4,
          // border: ".5px solid #ccc",
          display:"flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
      }
  })
);

const CurrentDay: FunctionComponent<CurrentDayProps> = ({ myDay }) => {
  const [day, setDay] = useState<Day>(myDay);
  const classes = useStyles();
  const onClickHandler = useCallback(
    (i, col) => {
      col[i].color = onColorChange(col[i].color);
      setDay({ ...day, [col]: col });
    },
    [day]
  );
  console.log(day.date);
  return (
    <Paper className={classes.wrapper}>
      <div className={classes.date}>{day.date}</div>
      <div className={classes.root}>
        <div className={classes.column}>
          {day.timeCol.map((cell, i) => (
            <div className={classes.cell} key={i}>
              {cell}
            </div>
          ))}
        </div>
        <div className={classes.column}>
          {day["studioColA"].map((cell, i) => (
            <div
              onClick={() => onClickHandler(i, day.studioColA)}
              className={classes.cell}
              style={{ background: cell.color }}
              key={i}
            >
              {cell.studio}
            </div>
          ))}
        </div>
        <div className={classes.column}>
          {day.studioColB.map((cell, i) => (
            <div
              onClick={() => onClickHandler(i, day.studioColB)}
              className={classes.cell}
              style={{ background: cell.color }}
              key={i}
            >
              {cell.studio}
            </div>
          ))}
        </div>
        <div className={classes.column}>
          {day.studioColC.map((cell, i) => (
            <div
              onClick={() => onClickHandler(i, day.studioColC)}
              className={classes.cell}
              style={{ background: cell.color }}
              key={i}
            >
              {cell.studio}
            </div>
          ))}
        </div>
        <div className={classes.column}>
          {day.studioColD.map((cell, i) => (
            <div
              onClick={() => onClickHandler(i, day.studioColD)}
              className={classes.cell}
              style={{ background: cell.color }}
              key={i}
            >
              {cell.studio}
            </div>
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default CurrentDay;
