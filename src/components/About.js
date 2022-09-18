import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import foto from "../images/cv.jpg";
import TypeWriterEffect from "react-typewriter-effect";
import cv from "../media/cv2.pdf";

const About = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Card className={classes.card}>
          <CardMedia image={foto} className={classes.media} title="foto" />
          <CardContent className={classes.cardcontent}>
            <TypeWriterEffect
              text="Hi, I am Lautaro Gonzalez"
              textStyle={{
                fontSize: "2rem",
                fontWeight: "700px",
                color: "#333",
              }}
              startDelay={100}
              cursorColor="black"
            />
            <TypeWriterEffect
              text="and I am a FrontEnd Developer"
              textStyle={{
                fontSize: "1.2rem",
                fontWeight: "500px",
                color: "black",
              }}
              startDelay={2500}
              cursorColor="black"
            />
            <Typography variant="h6" color="textSecondary">
              Texto descripcion texto descripcion texto descripcion texto
              descripcion texto descripcion texto descripcion
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="conained" className={classes.pdfbutton}>
              <a href={cv} download>
                Download CV
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectiondark: {
    background: "#333",
    color: "#fff",
  },
  sectioncontent: {
    maxWidth: "80vw",
    margin: "0 auto",
  },
  card: {
    height: "70vh",
    display: "flex",
    marginTop: theme.spacing(6),
    position: "relative",
  },
  media: {
    width: "250px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "10px",
    margin: theme.spacing(5),
  },
  cardcontent: {
    marginTop: theme.spacing(2),
    "& h6": {
      marginTop: theme.spacing(6),
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },

  pdfbutton: {
    position: "absolute",
    bottom: "3rem",
    right: "4rem",

    backgroundColor: "lightblue",
    padding: theme.spacing(3),
    "&:hover": {
      backgroundColor: "tomato",
    },
    "& a": {
      color: "black",
      textDecoration: "none",
      fontWeight: 900,
    },
    "& a:hover": {
      color: "white",
    },
  },
}));
export default About;
