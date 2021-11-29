import React, {FunctionComponent} from 'react';
import Page from "../../../shared/components/Page/Page";
import DaysList from "../../../components/DaysList/DaysList";
import {useFetch} from "../../../hooks/useFetch";


 interface HomeProps {
    children? : JSX.Element | JSX.Element[];

 }



const Home:FunctionComponent<HomeProps> = () => {
    const { list , loading, error } = useFetch()
      if (loading) return <h1>Loadin ...</h1>
      if (error) return <h1>Something!</h1>
    return (
        <div>
            <Page >
               <DaysList daysList={list} isShown={"none"} isShownUpdate={"none"} />
            </Page>
        </div>
    );
};

export default Home;