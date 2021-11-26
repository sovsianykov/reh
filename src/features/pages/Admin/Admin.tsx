import React, {FunctionComponent} from 'react';
import Page from "../../../shared/components/Page/Page";
import DaysList from "../../../components/DaysList/DaysList";
import {initialDaysList} from "../../../constants/constants";


interface HomeProps {
    children? : JSX.Element | JSX.Element[]
}



const Admin :FunctionComponent<HomeProps> = () => {
    return (
        <div>
            <Page >
                <DaysList daysList={initialDaysList} isShown={"block"}/>
            </Page>
        </div>
    );
};

export default Admin;