import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <Link to="/">DrittLeiligheter</Link>
      </div>
      <div className="header-links">
        <Link className="header-links-link" to="/about">
          Om
        </Link>
        <Link to="/upload" className="header-links-link">
          Last Opp
        </Link>
      </div>
    </div>
  );
};

export default Header;
