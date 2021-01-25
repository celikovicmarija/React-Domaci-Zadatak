import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./Form";
import gif from "../giphy.gif";
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Toolbar,
  Typography
} from "@material-ui/core";

import about from "../about.png";
import { Logo } from "./Logo";

const useStyles = makeStyles(theme => ({
  root: {
    flexiGrow: 1,
    color: "black",
    backgroundColor:"aquamarine"
  },
  aboutImg: {
    padding: "30px 150px 0px 150px",
    width: "100px"
  },
  aboutText: {
    fontFamily: "Montserrat",
    padding: "30px"
  },
  appBar: {
    background: "transparent",
    boxShadow: "none",
    position: "sticky"
  },
  list: {
    width: 400
  }
}));

const TemporaryDrawer = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    "right": false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <img src={about} className={classes.aboutImg} alt="about" />
      <Typography className={classes.aboutText} component="div" gutterBottom>
        <b>ReactWeather</b> je rad  kreiran kao domaći zadatak {" "}
        <span role="img" aria-label="love emoji" style={{ color: "red" }}>
          ♥️
        </span>{" "}
        za projekat iz ITEH-a od strane {" "}
        <a
          href="https://github.com/celikovicmarija"
          target="_blank"
          rel="noopener noreferrer"
        >
          studenta @ FON
        </a>
      </Typography>
      <Divider variant="middle" />
      <Typography className={classes.aboutText} component="div" gutterBottom>
        <h3>Linkovi</h3>
        <ul>
          <li>
            <a
              href="https://material-ui.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Material UI
            </a>
          </li>
          <li>
            <a
              href="https://openweathermap.org/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenWeatherMap API
            </a>
          </li>
          <li>
            <a
              href="https://reactjs.org/docs/getting-started.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              React dokumentacija
            </a>
          </li>
        </ul>
        <img src={gif} alt="Programming" width="350px"/>
      </Typography>
    </div>
  );

  return (
    <div>
      <Button
        className="about-btn"
        onClick={toggleDrawer("right", true)}
        data-testid="toggle"
      >
        Detalji
      </Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
};





const TemporaryDrawerContact = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
  //    onClick={toggleDrawer(side, false)}
    //  onKeyDown={toggleDrawer(side, false)}
    >
      <img src={about} className={classes.aboutImg} alt="about" />

      <Typography className={classes.aboutText} component="div" gutterBottom>
        <b>ReactWeather</b> je rad  kreiran kao domaći zadatak {" "}
        <span role="img" aria-label="love emoji" style={{ color: "red" }}>
          ♥️
        </span>{" "}
        za projekat iz ITEH-a od strane{" "}
        <a
          href="https://github.com/celikovicmarija"
          target="_blank"
          rel="noopener noreferrer"
        >
          studenta @ FON
        </a>
      </Typography>
      <Divider variant="middle" />
      <Typography className={classes.aboutText} component="div" gutterBottom>
        <h3>Bitno nam je vaše mišljenje!</h3>
        <p> Zamolili bismo vas da ostavite komentar na ovaj rad. Potrebno je uneti sve podatke kako bi nam vaš input stigao.</p>
        <Form/>
      </Typography>
    </div>
  );

  return (
    <div>
      <Button
        className="about-btn"
        onClick={toggleDrawer("right", true)}
        data-testid="toggle"
      >
        Kontakt
      </Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
};








export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar variant="dense">
          <Logo />
          <div style={{ flex: "1 1 auto"  }}></div>
          <TemporaryDrawer />
          <TemporaryDrawerContact />
          <Button className="github-btn">
            <a
              href="https://github.com/celikovicmarija"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
