import React from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";
import { PatternLines } from "@vx/pattern";

import allStates from "./data/allstates.json";
import statesData from "./data/states.json";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const geoJson = statesData;

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
};

const highlighted = [
  "Florida",
  "California",
  "Texas",
  "Alaska",
  "Colorado",
  "Virginia",
];

const MapChart = (props) => {
  let history = useHistory();

  function handleClick() {
    history.push({
      pathname: "/states",
    });
  }

  return (
    <ComposableMap
      style={{ height: 700, width: 1000 }}
      projection="geoAlbersUsa"
    >
      <PatternLines
        id="lines"
        height={6}
        width={6}
        stroke="#5bd785"
        strokeWidth={2}
        background="#FFF"
        orientation={["vertical"]}
      />
      <Geographies geography={geoJson}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => {
              return (
                <>
                  <Geography
                    key={geo.properties}
                    stroke="#001440"
                    geography={geo}
                    fill={
                      highlighted.includes(geo.properties.name)
                        ? "url('#lines')"
                        : "#99e6b3"
                    }
                    onClick={() => {
                      if (highlighted.includes(geo.properties.name)) {
                        props.newUsaState(geo.properties.name);
                        handleClick();
                      }
                    }}
                  />
                </>
              );
            })}
            {geographies.map((geo) => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find((s) => s.val === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {cur.id}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {cur.id}
                        </text>
                      </Annotation>
                    ))}
                </g>
              );
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
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
    newUsaState: (userInput) =>
      dispatch({ type: "US_STATE", userInput: userInput }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapChart);
