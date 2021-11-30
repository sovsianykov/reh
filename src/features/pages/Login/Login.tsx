import * as React from "react";
import { useCallback } from "react";
import { Box, Button } from "@mui/material";
import Page from "../../../shared/components/Page/Page";
import { PageTitle } from "../../../shared/components/Title/models";
import { firebase } from "../../../firebase/firebaseAut";
import { useDispatch } from "react-redux";
import { adminAction } from "../../../redux/actions";
import { createStyles, makeStyles } from "@mui/styles";
const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      width: "100%",
      paddingTop: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    btn: {
      width: 358,
      margin: "3px  0 10px 0",
    },
  })
);

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const SignInWithGoogle = useCallback(() => {
    let google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((re: any) => {
        // console.log(re.additionalUserInfo.profile.email);
        if (
          re.additionalUserInfo.profile.email === "swebproger@gmail.com" ||
          re.additionalUserInfo.profile.email === "kaskarecords@gmail.com"
        ) {

          dispatch(adminAction.login(true));
        }
      })
      .catch((error: Error) => console.log(error));
  }, [dispatch]);
  return (
    <Box flex={"true"} className={classes.wrapper}>
      <Page>
        <Button
          variant="outlined"
          onClick={SignInWithGoogle}
          color='secondary'
        >
          {PageTitle.SignInWithGoogle}
        </Button>
      </Page>
    </Box>
  );
};

export default Login;
