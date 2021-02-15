import React from "react";
import Box from "@material-ui/core/Box";
import data from "../components/data/descriptions.json";
import { connect } from "react-redux";

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
        if (item.state === props.usaState) {
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

const mapStateToProps = (state) => {
  return {
    // Example:
    usaState: state.usaState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // Example:
    newText: (userInput) =>
      dispatch({ type: "US_STATE", userInput: userInput }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(States);
