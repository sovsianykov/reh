import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useMediaQuery,
  Container,
} from "@mui/material";
import theme from "../../constants/theme";
import { Link } from "react-router-dom";
import { createStyles, makeStyles } from "@mui/styles";
import DrawerComponent from "../Drawer/Drawer";
import { AppRoute } from "../constantes/AppRoute";
import { PageTitle } from "../../shared/components/Title/models";

const useStyles = makeStyles(() =>
  createStyles({
      root: {
          zIndex:1,

      },
    navlinks: {
      marginLeft: theme.spacing(5),
      display: "flex",
    },
    logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "16px",
      marginLeft: theme.spacing(10),
      "&:hover": {
        color: "yellow",
      },
    },
  })
);

function Navbar() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <AppBar position="fixed" style={{  background: theme.palette.primary.light, zIndex:1}}>
      <Container style={{ maxWidth: 1600 }} >
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            Sheduler
          </Typography>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div className={classes.navlinks}>
              <Link to={AppRoute.Home} className={classes.link}>
                {PageTitle.Home}
              </Link>
              <Link to={AppRoute.StudioA} className={classes.link}>
                {PageTitle.StudioA}
              </Link>
              <Link to={AppRoute.StudioB} className={classes.link}>
                {PageTitle.StudioB}
              </Link>
              <Link to={AppRoute.StudioC} className={classes.link}>
                {PageTitle.StudioC}
              </Link>
              <Link to={AppRoute.StudioD} className={classes.link}>
                {PageTitle.StudioD}
              </Link>
              <Link to={AppRoute.Admin} className={classes.link}>
                {PageTitle.Admin}
              </Link>
              <Link to={AppRoute.Contacts} className={classes.link}>
                {PageTitle.Contacts}
              </Link>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
