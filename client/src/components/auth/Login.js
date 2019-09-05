import React, { Fragment, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <form align="center" onSubmit={e => onSubmit(e)}>
        <h1>LOGIN</h1>
        <div className="form-group">
          <TextField
            value={email}
            onChange={e => onChange(e)}
            name="email"
            placeholder="Email"
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <TextField
            value={password}
            onChange={e => onChange(e)}
            type="password"
            name="password"
            placeholder="Password"
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <input type="Submit" className="btn btn-primary" />
        </div>
      </form>
      <div align="center">
        <p>Don't have an account?</p>
        <p>
          Register <Link to="/register">Here</Link>
        </p>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
