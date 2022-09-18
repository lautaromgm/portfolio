import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const Skills = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">Mis Apps</Typography>
        <div className={classes.container}>
          <iframe
            src="https://fascinating-bavarois-d87120.netlify.app/"
            frameborder="0"
            className={classes.responsiveiframe}
          />
        </div>
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
  // container: {
  //   maxHeight: "20vh",
  //   //   position: "relative",
  //   //   overflow: "hidden",
  //   //   width: "100%",
  //   //   paddingTop: "56%" /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */,
  // },

  // /* Then style the iframe to fit in the container div with full height and width */
  responsiveiframe: {
    height: "85vh",
    width: "85vw",
    //   position: "absolute",
    //   top: 0,
    //   left: 0,
    //   bottom: 0,
    //   right: 0,
    //   width: "100%",
    //   height: "80%",
  },
}));
export default Skills;
