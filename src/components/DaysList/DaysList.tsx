import React from 'react';
import {Grid} from "@mui/material";
import {useTypesSelector} from "../../hooks/useTypesSelector";
import CurrentDay from "../../shared/components/currentDay/currentDay";

const DaysList = () => {

    const { initialDaysList } = useTypesSelector(state => state.apiReducer)

    return (
        <Grid container >
            {initialDaysList.map((day,i) =>(
                <Grid item key={i} xs={12} sm={6} md={4} xl={3}>
                    <CurrentDay myDay={day}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default DaysList;