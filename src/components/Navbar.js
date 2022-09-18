import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  BuildTwoTone,
  ContactMailTwoTone,
  EmojiObjectsTwoTone,
  InfoTwoTone,
} from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: "about",
      text: "About me",
      icon: <InfoTwoTone fontSize="large" />,
    },
    {
      id: "skills",
      text: "Skills",
      icon: <EmojiObjectsTwoTone fontSize="large" className={classes.light} />,
    },
    {
      id: "mywork",
      text: "My work",
      icon: <BuildTwoTone fontSize="large" />,
    },
    {
      id: "contact",
      text: "Get in touch",
      icon: <ContactMailTwoTone fontSize="large" />,
    },
  ];
  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Link
            to={"about"}
            spy={true}
            smooth={true}
            duration={500}
            offset={-75}
          >
            <img src={logo} className={classes.logo} alt="Logo" />
          </Link>
          <List className={classes.menu}>
            {links.map(({ id, text }, index) => (
              <Link
                key={index}
                to={id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-75}
              >
                {text}
              </Link>
            ))}
          </List>
          <IconButton
            edge="end"
            className={classes.menubutton}
            onClick={() => setOpen(!open)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton onClick={() => setOpen(false)}>
          <CancelIcon fontSize="large" />
        </IconButton>
        <Divider />
        {links.map(({ id, text, icon }, index) => (
          <Link
            className={classes.sidebar}
            key={index}
            to={id}
            spy={true}
            smooth={true}
            duration={500}
            offset={-75}
          >
            <ListItem component="h5">
              <span>
                <ListItemIcon>{icon}</ListItemIcon>
              </span>
              {text}
            </ListItem>
          </Link>
        ))}
      </Drawer>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fafafa",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    height: "100%",
    objectFit: "contain",
    "&:hover": {
      cursor: "pointer",
    },
  },
  light: {
    color: "#ffcc00",
  },
  menu: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& a": {
      color: "#333",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(3),
    },
    "& a:hover": {
      cursor: "pointer",
      color: "gray",
      textDecoration: "underline",
    },
  },
  menubutton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      position: "absolute",
      top: 10,
      right: 10,
    },
  },
  sidebar: {
    width: "40vw",
    [theme.breakpoints.down("xs")]: {
      width: "60vw",
    },
    "& h5": {
      margin: theme.spacing(7, 0, 0, 4),
      fontSize: "1.4rem",
      color: "#333",
      fontWeight: "bold",
    },
    "& h5:hover": {
      cursor: "pointer",
      color: "gray",
      textDecoration: "underline",
    },
  },
}));

export default Navbar;
