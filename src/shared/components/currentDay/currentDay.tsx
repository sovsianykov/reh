import React, {
  FunctionComponent, memo,
  useCallback,
  useState,
} from "react";
import "moment/locale/pt-br";
import { createStyles, makeStyles } from "@mui/styles";
import theme from "../../../constants/theme";
import { Cell, Day, onColorChange } from "../../../constants/constants";
import { Box, Paper } from "@mui/material";
import StudioCol from "./StudioCol";

interface CurrentDayProps {
  myDay: Day;
  button?: JSX.Element;
  rewriteButton?: JSX.Element;
  deleteButton?: JSX.Element;
  create?: boolean;
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
      // color: "#034d4d",

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

const CurrentDay: FunctionComponent<CurrentDayProps> = ({
  myDay,
  button,
  rewriteButton,
  deleteButton,
}) => {
  const [day, setDay] = useState<Day>(myDay);
  const cols = [day.studioColA, day.studioColB, day.studioColC, day.studioColD];

  const classes = useStyles();
  const onClickHandler = useCallback(
    (i, col) => {
      col[i].color = onColorChange(col[i].color);
      setDay({ ...day, [col]: col });
    },
    [day]
  );
  return (
    <Paper className={classes.wrapper}>
      <div className={classes.date}>{day.date}</div>
      <Box className={classes.root}>
        <div className={classes.column}>
          {day.timeCol.map((cell, i) => (
            <div className={classes.cell} key={i}>
              {cell}
            </div>
          ))}
        </div>
        {cols.map(
          (col: Cell[], i: number) => (
            <StudioCol col={col} onClick={onClickHandler} key={i} />
          )
        )}
      </Box>
      {button}
      {rewriteButton}
      {deleteButton}
    </Paper>
  );
};

export default memo(CurrentDay);
