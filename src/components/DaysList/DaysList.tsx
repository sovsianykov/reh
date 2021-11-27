import React, { FunctionComponent, useCallback } from "react";
import {Button, Grid } from "@mui/material";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import CurrentDay from "../../shared/components/currentDay/currentDay";
import { adminAction } from "../../redux/actions";
import { createStyles, makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { Day } from "../../constants/constants";

interface DaysListProps {
  daysList: Day[];
  isShown: "block" | "none";
    isShownUpdate: "block" | "none";
    create?:boolean;
}

const useStyles = makeStyles(() =>
  createStyles({
    btn: {
      width: 358,
      margin: "3px  0 10px 0",
    },
  })
);

const DaysList: FunctionComponent<DaysListProps> = ({ daysList, isShown,isShownUpdate,create }) => {
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
    const onRewriteDayHandler = useCallback(
        (e, day) => {
            e.preventDefault();

            daysList[daysList.findIndex((d) => d.id === day.id)] =
                day;
            console.log(daysList, 'on update')
            dispatch(adminAction.rewriteData(day,daysList));
        },
        [daysList, dispatch]
    );

  return (
    <Grid container style={{ overflowY: "hidden" }} spacing={1}>



      {daysList.map((day, i) => (
        <Grid item key={i} xs={12} sm={6} md={4} xl={3}>
          <CurrentDay
              create={create}
            myDay={day}
            button={
              <Button
                style={{ display: isShown }}
                onClick={(e) => onUpdateDayHandler(e, day)}
                className={classes.btn}
                variant="contained"
                color="error"
              >
                CREATE
              </Button>
            }
            rewriteButton={
                <Button
                    style={{ display: isShownUpdate }}
                    onClick={(e) => onRewriteDayHandler(e, day)}
                    className={classes.btn}
                    variant="contained"
                    color="error"
                >
                    Update
                </Button>
            }
            
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default DaysList;
