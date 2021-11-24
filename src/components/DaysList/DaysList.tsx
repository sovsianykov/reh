import React, { useCallback } from "react";
import { Button, Grid } from "@mui/material";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import CurrentDay from "../../shared/components/currentDay/currentDay";
import { adminAction } from "../../redux/actions";
import { createStyles, makeStyles } from "@mui/styles";
import {useDispatch} from "react-redux";

const useStyles = makeStyles(() =>
  createStyles({
    btn: {
      width: 358,
      margin: "3px  0 10px 0",
    },
  })
);

const DaysList = () => {
  const { initialDaysList } = useTypesSelector((state) => state.apiReducer);
  const classes = useStyles();
  const dispatch = useDispatch()
  const onUpdateDayHandler = useCallback((e, day) => {
    e.preventDefault();
      console.log(initialDaysList)
    initialDaysList[initialDaysList.findIndex(d => d.date === day.date)] = day
      dispatch(adminAction.updateData(initialDaysList))
  }, [dispatch, initialDaysList]);
  return (
    <Grid container style={{ overflowY: "hidden" }} spacing={.5}>
      {initialDaysList.map((day, i) => (
        <Grid item key={i} xs={12} sm={6} md={4} xl={3}>
          <CurrentDay
            myDay={day}
            button={
              <Button
                onClick={(e) => onUpdateDayHandler(e, day)}
                className={classes.btn}
                variant="contained"
                color="error"
              >
                UPDATE
              </Button>
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default DaysList;
