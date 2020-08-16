import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import Logo from "./logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <Link to="/">
          <img src={Logo} className="header-title-logo" alt="logo" />
        </Link>
      </div>
      <div className="header-links">
        <Link className="header-links-link" to="/about">
          OM
        </Link>
        <Link to="/upload" className="header-links-link">
          LAST OPP
        </Link>
      </div>
    </div>
  );
};

export default Header;
