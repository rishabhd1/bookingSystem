import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a onClick={logout} className="nav-link" href="#!">
          <i className="fas fa-sign-out-alt"></i> Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            src="/docs/4.3/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          BOOKING
        </Link>
        {<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
