import React from "react";

import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { useHistory } from "react-router-dom";

const NavigationBar = () => {
  let history = useHistory();

  function returnHome() {
    history.push("/home");
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <Button style={styles.buttonText} onClick={returnHome} variant="text">
          HOME
        </Button>
      </Box>

      <Box>
        <IconButton
          aria-haspopup="true"
          onClick={handleClick}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon style={{ fontSize: 48 }} />
        </IconButton>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem style={styles.menuItemStyle} onClick={handleClose}>
            Contact
          </MenuItem>
          <MenuItem style={styles.menuItemStyle} onClick={handleClose}>
            Subscribe
          </MenuItem>
          <MenuItem style={styles.menuItemStyle} onClick={handleClose}>
            Recommendations
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

const styles = {
  buttonText: { color: "black", fontFamily: "Alegreya", fontSize: 40 },
  menuItemStyle: { color: "black", fontFamily: "Alegreya", fontSize: 24 },
};
export default NavigationBar;
