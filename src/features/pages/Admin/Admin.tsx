import React, { FunctionComponent, memo, useCallback, useState } from "react";
import Page from "../../../shared/components/Page/Page";
import DaysList from "../../../components/DaysList/DaysList";
import { initialDaysList } from "../../../constants/constants";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useFetch } from "../../../hooks/useFetch";
import theme from "../../../constants/theme";
import { firebase } from "../../../firebase/firebaseAut";
import Login from "../Login/Login";
import { adminAction } from "../../../redux/actions";
import { useDispatch } from "react-redux";

interface HomeProps {
  children?: JSX.Element | JSX.Element[];
}

const Admin: FunctionComponent<HomeProps> = () => {
  const [isUserSignedIn, setUserSignedIn] = useState(false);
  const { list, loading, error, login } = useFetch();
  const dispatch = useDispatch();

  const signOut = useCallback(() => {
    firebase
      .auth()
      .signOut()
      .then((r) => console.log(r));
    dispatch(adminAction.login(false));
  }, [dispatch]);

  firebase.auth().onAuthStateChanged((user) => {
    if (user && login) {
      return setUserSignedIn(true);
    } else {
      setUserSignedIn(false);
    }
  });

  if (loading)
    return <CircularProgress style={{ marginTop: 150, marginLeft: "45%" }} />;
  if (error) return <h1>Something vent wrong!</h1>;
  if (isUserSignedIn) {
    return (
      <Page>
        <Typography
          variant="h5"
          color={theme.palette.primary.dark}
          textAlign={"center"}
        >
          UPDATE EXISTED
        </Typography>
        <DaysList daysList={list} isShownUpdate={"block"} />
        <Typography
          variant="h5"
          color={theme.palette.primary.dark}
          textAlign={"center"}
        >
          CREATE A NEW DAY
        </Typography>
        <DaysList daysList={initialDaysList} isShown={"block"} create={true} />
        <Button variant="outlined" onClick={signOut} color="secondary">
          sign out
        </Button>
      </Page>
    );
  } else {
    return <Login />;
  }
};
export default memo(Admin);
