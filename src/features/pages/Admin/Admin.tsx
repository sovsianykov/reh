import React, {FunctionComponent} from 'react';
import Page from "../../../shared/components/Page/Page";
import DaysList from "../../../components/DaysList/DaysList";
import {initialDaysList} from "../../../constants/constants";
import {Box, Typography} from "@mui/material";
import {useFetch} from "../../../hooks/useFetch";
import theme from "../../../constants/theme";


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
                <Typography variant='h5' color={theme.palette.primary.dark}  textAlign={"center"}>
                    UPDATE EXISTED
                </Typography>
                <DaysList daysList={list} isShown={"none"} isShownUpdate={"block"} />
                <Typography variant='h5' color={theme.palette.primary.dark} textAlign={"center"}>
                    CREATE A NEW DAY
                </Typography>
                <DaysList daysList={initialDaysList} isShown={"block"} isShownUpdate={"none"} create={true}/>
            </Page>
        </Box>
    );
};

export default Admin;