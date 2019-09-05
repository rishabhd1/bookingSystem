import React, { Fragment, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <form align="center" onSubmit={e => onSubmit(e)}>
        <h1>REGISTER</h1>
        <div className="form-group">
          <TextField
            value={name}
            onChange={e => onChange(e)}
            name="name"
            placeholder="Name"
            variant="outlined"
          />
        </div>
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
          <TextField
            value={password2}
            onChange={e => onChange(e)}
            type="password"
            name="password2"
            placeholder="Confirm Password"
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <input type="Submit" className="btn btn-primary" />
        </div>
      </form>
      <div align="center">
        <p>Already have an account?</p>
        <p>
          Login <Link to="/register">Here</Link>
        </p>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
