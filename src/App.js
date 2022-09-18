import { makeStyles } from "@material-ui/core";
import About from "./components/About";
import Contact from "./components/Contact";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <About title="About me" id="about" dark={true} />
      <Skills title="My coding Journey" id="skills" dark={false} />
      <MyWork title="My work" id="mywork" dark={true} />
      <Contact title="Get in touch" id="contact" dark={false} />
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default App;
