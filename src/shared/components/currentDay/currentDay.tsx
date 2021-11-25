import React, {FunctionComponent, useCallback, useState} from "react";
import "moment/locale/pt-br";
import { createStyles, makeStyles } from "@mui/styles";
import theme from "../../../constants/theme";
import { Day, onColorChange, onFontColorChange} from "../../../constants/constants";
import { Paper} from "@mui/material";

interface CurrentDayProps {
  myDay: Day;
  button?: JSX.Element
}


const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 360,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      overflow: "hidden",
      margin: theme.spacing(0.5),
    },
    column: {
      width: 68,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    cell: {
      width: "100%",
      marginBottom: theme.spacing(0.25),
      height: 30,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontWeight: 400,
      fontSize: "18px",
      padding: "5px 0",
      letterSpacing: 0.6,
      background: "#d5d4d4",
      cursor: "pointer",
      transition: ".15s ease-in-out",
      color: "#034d4d",

      "&:hover": {
        background: "#acacac",
        // transform: "rotateZ(360deg)",
        color: "#fff!important",
      },
    },
    date: {
      width: 358,
      height: 50,
      padding: "5px 0",
      fontSize: "20px",
      textAlign: "center",
      lineHeight: "40px",
      letterSpacing: 0.6,
      background: "#d5d4d4",
    },
    wrapper: {
      width: "100%",
      paddingTop: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    btn: {
      width: 358,
      margin: "3px  0 10px 0",
    },
  })
);

const CurrentDay: FunctionComponent<CurrentDayProps> = ({ myDay,button }) => {
  const [day, setDay] = useState<Day>(myDay);

  const classes = useStyles()
  const onClickHandler = useCallback(
    (i, col) => {
      col[i].color = onColorChange(col[i].color);
      col[i].fontColor = onFontColorChange(col[i].color);
      if (col[i].color === "#034d4d") col[i].status = "free";
      if (col[i].color === "#F07427") col[i].status = "reserv";
      if (col[i].color === "#D32F2F") col[i].status = "busy";
      setDay({ ...day, [col]: col });
    },
    [day]
  );
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
              style={{ background: cell.color ,color: cell.fontColor}}
              key={i}
            >
              {cell.status}
            </div>
          ))}
        </div>
        <div className={classes.column}>
          {day.studioColB.map((cell, i) => (
            <div
              onClick={() => onClickHandler(i, day.studioColB)}
              className={classes.cell}
              style={{ background: cell.color ,color: cell.fontColor}}
              key={i}
            >
              {cell.status}
            </div>
          ))}
        </div>
        <div className={classes.column}>
          {day.studioColC.map((cell, i) => (
            <div
              onClick={() => onClickHandler(i, day.studioColC)}
              className={classes.cell}
              style={{ background: cell.color ,color: cell.fontColor}}
              key={i}
            >
              {cell.status}
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
              {cell.status}
            </div>
          ))}
        </div>
      </div>
      {button}
    </Paper>
  );
};

export default CurrentDay;
