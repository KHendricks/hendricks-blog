import React from "react";

// Material UI

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// Simple Maps
import MapChart from "../components/MapChart";

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" p={7} m={1}>
      <Box
        display="flex"
        alignItems="center"
        p={1}
        m={1}
        flexDirection="row"
        justifyContent="space-around"
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
        p={5}
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

      <Box p={1}>
        <Typography
          variant="h6"
          align="center"
          style={styles.introductionTextStyle}
        >
          Click on any state with stripes to see the adventures of where we have
          been!
        </Typography>
      </Box>

      <Box
        display="flex"
        alignItems="flex-start"
        p={1}
        m={1}
        flexDirection="row"
        justifyContent="center"
        // style={{ background: "pink" }}
      >
        <MapChart />
      </Box>
    </Box>
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

export default Home;
