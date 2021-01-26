import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./Form";
import gif from "../img/giphy.gif";
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Toolbar,
  Typography
} from "@material-ui/core";

import about from "../img/about.png";
import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";

const useStyles = makeStyles(theme => ({
  root: {
    flexiGrow: 1,
    color: "black",
    backgroundColor:"aquamarine"
  },
  aboutImg: {
    marginLeft: "140px",
    padding: "0 50px 5 30px",
    width: "100px"
  },
  aboutText: {
    fontFamily: "Montserrat",
    padding: "20px"
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
      <img src={require('../img/about.png')} className={classes.aboutImg} alt="about" />

      <Typography className={classes.aboutText} component="div" gutterBottom>
        <b>ReactWeather</b> je rad  kreiran kao domaći zadatak {" "}
        <span role="img"  style={{ color: "red" }}>
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
          <li>
            <a
              href="https://www.react-simple-maps.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ugradnja mapa na sajt
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
      <img src={require('../img/about.png')} className={classes.aboutImg} alt="about" />

      <Typography className={classes.aboutText} component="div" gutterBottom>
        <b>ReactWeather</b> je rad  kreiran kao domaći zadatak {" "}
        <span role="img"  style={{ color: "red" }}>
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





const DrawerMap = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    "left": false
  });
  const [content, setContent] = useState("");

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
      <img src={require('../img/about.png')} className={classes.aboutImg} alt="about" />

      <Typography className={classes.aboutText} component="div" gutterBottom>
        <b>ReactWeather</b> je rad  kreiran kao domaći zadatak {" "}
        <span role="img"  style={{ color: "red" }}>
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
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
      <Divider variant="middle" />
      <p className={classes.aboutText} >U ovim danima kada se svima nama putuje, kada spremamo ispite i maštamo o danu kada ćemo
      konačno završiti sa svojim obavezama, volim da razmišljam kuda bih sve išla.
        Ovo je za sve one koji dele moje misli. Prikazana je mapa sveta i ako biste prešli
        mišem preko nje, država bi pocrvenela i pokazala koliko u njoj ima stanovnika.
        Neat, zar ne?
      </p>

    </div>
  );

  return (
    <div>
      <Button
        className="about-btn"
        onClick={toggleDrawer("left", true)}
        data-testid="toggle"
      >
        Mapa
      </Button>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        {sideList("left")}
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
          <img src={require("../img/logo.png")} style= {{ width: "30px", height: "30px" }} alt="logo" /> ReactWeather
          <div style={{ flex: "1 1 auto"  }}></div>
          <DrawerMap/>
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
