import React, { useCallback } from "react";
import { Button, Grid } from "@mui/material";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import CurrentDay from "../../shared/components/currentDay/currentDay";
import { adminAction } from "../../redux/actions";
import { createStyles, makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import {useFetch} from "../../hooks/useFetch";

const useStyles = makeStyles(() =>
  createStyles({
    btn: {
      width: 358,
      margin: "3px  0 10px 0",
    },
  })
);

const DaysList = () => {
 const { list , loading, error } = useFetch()
  const { initialDaysList } = useTypesSelector((state) => state.apiReducer);
  const classes = useStyles();
  const dispatch = useDispatch();
  const onUpdateDayHandler = useCallback(
    (e, day) => {
      e.preventDefault();

      initialDaysList[initialDaysList.findIndex((d) => d.date === day.date)] =
        day;
      dispatch(adminAction.updateData(day, initialDaysList));
    },
    [dispatch, initialDaysList]
  );

  return (
    <Grid container style={{ overflowY: "hidden" }} spacing={4}>
      {list.map((day, i) => (
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
