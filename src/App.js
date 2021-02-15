import React from "react";

import Home from "./routes/Home.js";
import States from "./routes/States.js";
import NavigationBar from "./components/NavigationBar";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavigationBar />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/states" component={States} />
        </Switch>
      </Router>
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
