import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import "../assets/styles/header.css";
const Header = () => {
  return (
    <div className="tab-container">
      <NavLink activeClassName="is-active" className="tab" to="/fruits">
        Fruits
      </NavLink>
      <NavLink activeClassName="is-active" className="tab" to="/favorites">
        Favorites
      </NavLink>
    </div>
  );
};

export default withRouter(Header);
