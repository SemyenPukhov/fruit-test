import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import "../App.css";
import "../services/FruitasticApi";
import Header from "../components/Header";
import Fruits from "./Fruites";
import Favorites from "./Favorites";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Redirect exact from="/" to="/fruits" />
          <Route path="/fruits" component={Fruits} />
          <Route path="/favorites" component={Favorites} />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
