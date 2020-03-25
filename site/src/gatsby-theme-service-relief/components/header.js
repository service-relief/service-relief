import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = () => (
  <header>
    <h1 className="font-heading text-5xl py-16 leading-none">
      <Link to="/">
        <span>The</span>
        <br />
        <span>Service</span>
        <br />
        <span>Relief</span>
        <br />
        <span>Project</span>
      </Link>
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteCity: PropTypes.string,
  siteState: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``,
  siteCity: ``,
  siteState: ``
};

export default Header;
