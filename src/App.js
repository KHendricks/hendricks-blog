import React from "react";

// Material UI
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import PhotoIcon from "@material-ui/icons/Photo";
import Box from "@material-ui/core/Box";

// Simple Maps
import MapChart from "./components/MapChart";

// Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Box
        display="flex"
        flexDirection="column"
        p={7}
        m={1}
        // style={{ background: "red" }}
      >
        <Box
          display="flex"
          alignItems="flex-end"
          flexDirection="column"
          // style={{ background: "blue" }}
        >
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon style={{ fontSize: 48 }} />
          </IconButton>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          p={1}
          m={1}
          flexDirection="row"
          justifyContent="space-around"
          // style={{ background: "green" }}
        >
          <Box p={1}>
            <Typography variant="h1" style={styles.welcomeStyle}>
              Welcome to the T.H.F Blog
            </Typography>
          </Box>
          {/* <Box p={1}>
            <PhotoIcon style={{ fontSize: 100 }} />
          </Box> */}
        </Box>

        <Box
          display="flex"
          alignItems="center"
          p={10}
          m={1}
          flexDirection="row"
          justifyContent="space-around"
          // style={{ background: "pink" }}
        >
          <Typography
            variant="h6"
            align="center"
            style={styles.introductionTextStyle}
          >
            Welcome to our blog! Our names are Kyle and Heather, and we are the
            Hendricks family! We have traveled around the USA for work trips and
            vacations, and we always try to find the hidden treasures our world
            has to offer, from small local restaurants to amazing natural
            landmarks.
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          p={1}
          m={1}
          flexDirection="row"
          justifyContent="space-around"
          // style={{ background: "pink" }}
        >
          <MapChart />
        </Box>
      </Box>
    </Provider>
  );
};

const styles = {
  containerBox: {},
  toolbarStyle: {
    justifyContent: "flex-end",
  },
  appBarStyle: { color: "black", background: "transparent", boxShadow: "none" },
  welcomeStyle: {
    color: "black",
    fontFamily: "Alegreya",
  },
  introductionTextStyle: {
    color: "black",
    fontFamily: "Ariel",
  },
};

export default App;
