import React, {FunctionComponent, useCallback, useState} from "react";
import { createStyles, makeStyles } from "@mui/styles";
import theme from "../../../constants/theme";
import { Day, onColorChange} from "../../../constants/constants";
interface CurrentDayProps {
  myDay: Day;
}
const useStyles = makeStyles(() =>
  createStyles({
    root: {

      width: 368,
      // background: theme.palette.secondary.main,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      overflow:'hidden',
        margin:theme.spacing(.5)
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
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontWeight: 500,
      fontSize: "18px",
      padding: " 0 6px",
        letterSpacing:.6,
      border: ".5px solid #000",
        background: "#ccc",
        cursor:'pointer',

    },
  })
);

const CurrentDay: FunctionComponent<CurrentDayProps> = ({ myDay }) => {
    const [day, setDay] = useState<Day>(myDay)
  const classes = useStyles();
   const onClickHandler = useCallback((i,col) => {
        col[i].color = onColorChange(col[i].color)
        setDay({...day,[col]: col})
   },[day])
  return (
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
            onClick={()=>onClickHandler(i,day.studioColA)}
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
              onClick={()=>onClickHandler(i,day.studioColB)}
              className={classes.cell}
            style={{ background: cell.color }}
            key={i}
          >{cell.studio}</div>
        ))}
      </div>
      <div className={classes.column}>
        {day.studioColC.map((cell, i) => (
          <div
              onClick={()=>onClickHandler(i,day.studioColC)}
              className={classes.cell}
            style={{ background: cell.color }}
            key={i}
          >{cell.studio}</div>
        ))}
      </div>
      <div className={classes.column}>
        {day.studioColD.map((cell, i) => (
          <div
              onClick={()=>onClickHandler(i,day.studioColD)}
              className={classes.cell}
            style={{ background: cell.color }}
            key={i}
          >{cell.studio}</div>
        ))}
      </div>
    </div>
  );
};

export default CurrentDay;
