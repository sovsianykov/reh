import React, { FunctionComponent } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import theme from "../../../constants/theme";
import { Day } from "../../../constants/constants";
interface CurrentDayProps {
  day: Day;
}
const useStyles = makeStyles(() =>
  createStyles({
    root: {

      width: 375,
      // background: theme.palette.secondary.main,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      overflow:'hidden'
    },
    column: {
      width: 64,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    cell: {
      width: "60px",
      margin: ".5px 0",
      height: 30,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontWeight: 600,
      fontSize: "20px",
      padding: " 0 6px",
        letterSpacing:.8,
      border: ".5px solid #000",
        background: "#ccc",
        cursor:'pointer',

    },
  })
);

const CurrentDay: FunctionComponent<CurrentDayProps> = ({ day }) => {
  const classes = useStyles();

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
        {day.studioColA.map((cell, i) => (
          <div
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
            className={classes.cell}
            style={{ background: cell.color }}
            key={i}
          >{cell.studio}</div>
        ))}
      </div>
      <div className={classes.column}>
        {day.studioColC.map((cell, i) => (
          <div
            className={classes.cell}
            style={{ background: cell.color }}
            key={i}
          >{cell.studio}</div>
        ))}
      </div>
      <div className={classes.column}>
        {day.studioColD.map((cell, i) => (
          <div
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
