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

const useStyles = makeStyles(() => ({
  root: {
    background: theme.palette.primary.light,
    width: 200,
    height: "100%",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "20px",
  },
  icon: {
    color: "white",
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
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
          <ListItem onClick={() => setOpenDrawer(false)}/>
          <ListItem onClick={() => setOpenDrawer(false)}/>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuRounded className={classes.icon} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
