import React from "react";

import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

import { useHistory } from "react-router-dom";

const NavigationBar = () => {
  const [history, setHistory] = React.useState(useHistory);

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="row"
      justifyContent="space-around"
      p={1}
      m={1}
    >
      <Box>
        <Button
          style={styles.buttonText}
          //   onClick={history.push("/home")}
          variant="text"
        >
          HOME
        </Button>
      </Box>

      <Box>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon style={{ fontSize: 48 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

const styles = {
  buttonText: { color: "black", fontFamily: "Alegreya", fontSize: 40 },
};
export default NavigationBar;
