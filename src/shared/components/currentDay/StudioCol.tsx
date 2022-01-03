import React, {FunctionComponent, memo, useCallback} from "react";
import { Cell } from "../../../constants/constants";
import { createStyles, makeStyles } from "@mui/styles";
import theme from "../../../constants/theme";
import { Box } from "@mui/material";
interface StudioColProps {
  col: Cell[];
  onClick(id: number, col: Cell[]):  void;
}
const useStyles = makeStyles(() =>
  createStyles({
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

      "&:hover": {
        background: "#acacac",
        color: "#fff!important",
      },
    },
  })
);

const StudioCol: FunctionComponent<StudioColProps> = ({ col, onClick }) => {
  const classes = useStyles();

  const onClickHandler = useCallback(
    (i) => {
      onClick(i, col);
    },
    [onClick, col]
  );

  return (
    <Box className={classes.column}>
      {col.map((cell: Cell, i: number) => (
        <div
          onClick={() => onClickHandler(i)}
          className={classes.cell}
          style={{ background: cell.color, color: cell.fontColor }}
          key={i}
        >
          {cell.status}
        </div>
      ))}
    </Box>
  );
};

export default memo(StudioCol);
