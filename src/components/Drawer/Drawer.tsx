import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { MenuRounded } from "@mui/icons-material";
import { AppRoute } from "../constantes/AppRoute";
import { PageTitle } from "../../shared/components/Title/models";
import theme from "../../constants/theme";
import logo from "../../assets/img/logo.png";

const useStyles = makeStyles(() => ({
  wrapper: {
    background: theme.palette.primary.light,
    width: 200,
    height: "100vh",
    position : "relative"
  },
  root: {
    background: theme.palette.primary.light,
    width: 200,
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "20px",
  },
  icon: {
    color: "white",
  },
  logoWrapper: {
    margin: "40px  auto 20px auto",
    width: 150,
    height: 37,
    overflow: "hidden",
  },
  contactsWrapper: {
    margin: "0 auto",
    width: 150,
    height: 25,
    overflow: "hidden",
    position: "absolute",
    bottom: 100,
    left: 25
  },
  emailWrapper: {
    margin: "0 auto",
    textDecoration: "none",
    color: "#fff",
    fontSize: "14px",
    width: 190,
    height: 37,
    overflow: "hidden",
    textAlign:"center",
    position: "absolute",
    bottom: 50,
    cursor: "pointer"
  },
  email: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer"
  },
  image: {
    width: "100%",
    display: "block",
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div className={classes.wrapper}>
          <div className={classes.logoWrapper}>
            <img src={logo} alt="logo205" className={classes.image} />
          </div>
          <List className={classes.root}>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to={AppRoute.Home} className={classes.link}>
                  {PageTitle.Home}
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to={AppRoute.StudioA} className={classes.link}>
                  {PageTitle.StudioA}
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to={AppRoute.StudioB} className={classes.link}>
                  {PageTitle.StudioB}
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to={AppRoute.StudioC} className={classes.link}>
                  {PageTitle.StudioC}
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to={AppRoute.StudioD} className={classes.link}>
                  {PageTitle.StudioD}
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to={AppRoute.Admin} className={classes.link}>
                  {PageTitle.Admin}
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to={AppRoute.Contacts} className={classes.link}>
                  {PageTitle.Contacts}
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)} />
            <ListItem onClick={() => setOpenDrawer(false)} />
          </List>
          <div className={classes.contactsWrapper}>
            <a href="tel:+38067-238-99-93" className={classes.link}>
              (067)-238-99-93
            </a>
          </div>
          <div className={classes.emailWrapper}>
            <a href="mailto: kaskarecords@gmail.com" className={classes.email}>
              kaskarecords@gmail.com
            </a>
          </div>
        </div>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuRounded className={classes.icon} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
