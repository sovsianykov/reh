import React, {FunctionComponent, useState} from "react";
import Page from "../../../shared/components/Page/Page";
import DaysList from "../../../components/DaysList/DaysList";
import { initialDaysList } from "../../../constants/constants";
import {Box, Button, Typography} from "@mui/material";
import { useFetch } from "../../../hooks/useFetch";
import theme from "../../../constants/theme";
import { firebase } from '../../../firebase/firebaseAut'
import Login from "../Login/Login";




interface HomeProps {
  children?: JSX.Element | JSX.Element[];
}

const Admin: FunctionComponent<HomeProps> = () => {
  const [isUserSignedIn, setUserSignedIn] = useState(false)
  const {list, loading, error ,login} = useFetch();

  // console.log(login ,'from state')
  const signOut =() =>{
    firebase.auth().signOut()
  }
  firebase.auth().onAuthStateChanged((user:any) =>{
    if (user&&login) {
      return setUserSignedIn(true)
    } else {
      setUserSignedIn(false)
    }
  })
  if (loading) return <h1 style={{marginTop: 150}}>Loading ...</h1>;
  if (error) return <h1>Something vent wrong!</h1>;
  if (isUserSignedIn) {
    return (
        <Box>
          <Page>
            <Button variant='outlined' onClick={signOut} color='secondary'>sign out</Button>

            <Typography
                variant="h5"
                color={theme.palette.primary.dark}
                textAlign={"center"}
            >
              UPDATE EXISTED
            </Typography>
            <DaysList daysList={list} isShown={"none"} isShownUpdate={"block"}/>
            <Typography
                variant="h5"
                color={theme.palette.primary.dark}
                textAlign={"center"}
            >
              CREATE A NEW DAY
            </Typography>
            <DaysList
                daysList={initialDaysList}
                isShown={"block"}
                isShownUpdate={"none"}
                create={true}
            />
          </Page>
        </Box>
    );
  } else {
    return (
        <Login/>
    )
  }

}
export default Admin;
