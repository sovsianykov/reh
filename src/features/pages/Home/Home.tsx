import React, { FunctionComponent } from "react";
import Page from "../../../shared/components/Page/Page";
import DaysList from "../../../components/DaysList/DaysList";
import { useFetch } from "../../../hooks/useFetch";
import { CircularProgress } from "@mui/material";

interface HomeProps {
  children?: JSX.Element | JSX.Element[];
}

const Home: FunctionComponent<HomeProps> = () => {

  const { list, loading, error } = useFetch();
  if (loading) return <CircularProgress />;
  if (error) return <h1>Something vent wrong !</h1>;

  return (
    <Page>
      <DaysList daysList={list}  />
    </Page>
  );
};

export default Home;
