import React from "react";

import Box from "@material-ui/core/Box";

import data from "../components/data/descriptions.json";

const States = (props) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      p={1}
      m={1}
      flexDirection="row"
      justifyContent="space-around"
    >
      {data.map((item, i) => {
        if (item.state === "Florida") {
          return (
            <text>
              {item.state}, {item.shortDescription}
            </text>
          );
        }
      })}
    </Box>
  );
};

export default States;
