import React, {FunctionComponent} from 'react';
import Page from "../../../shared/components/Page/Page";
import DaysList from "../../../components/DaysList/DaysList";
import {initialDaysList} from "../../../constants/constants";
import {Box} from "@mui/material";
import {useFetch} from "../../../hooks/useFetch";


interface HomeProps {
    children? : JSX.Element | JSX.Element[]
}



const Admin :FunctionComponent<HomeProps> = () => {
    const { list , loading, error } = useFetch()
    if (loading) return <h1>Loading ...</h1>
    if (error) return <h1>Something vent wrong!</h1>
    return (
        <Box>
            <Page >
                <h2>Update</h2>
                <DaysList daysList={list} isShown={"none"}/>
                <h2>Create</h2>
                <DaysList daysList={initialDaysList} isShown={"block"}/>
            </Page>
        </Box>
    );
};

export default Admin;