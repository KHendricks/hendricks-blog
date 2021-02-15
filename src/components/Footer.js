import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      style={styles.footerBoxStyle}
    >
      <Box display="flex" flexDirection="row">
        <Typography variant="h6" align="center" style={styles.footerTextStyle}>
          Terms and Conditions
        </Typography>
        <Typography variant="h6" align="center" style={styles.footerTextStyle}>
          Privacy Policy
        </Typography>
      </Box>

      <Box
        display="flex"
        flex={0.5}
        alignItems="center"
        justifyContent="space-around"
        flexDirection="row"
      >
        <Typography variant="h6" align="center" style={styles.footerTextStyle}>
          Copyright 2020 © The Hendricks' Blog{" "}
        </Typography>
      </Box>
    </Box>
  );
};

const styles = {
  footerBoxStyle: {
    background: "#eaeae9",
  },
  footerTextStyle: {
    color: "black",
    font: "Arial",
    margin: 10,
  },
};
export default Footer;
