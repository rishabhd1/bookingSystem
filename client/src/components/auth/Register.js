import React, { Fragment, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Register = () => {
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
      console.log("Password do not match");
    } else {
      console.log("SUCCESS");
    }
  };

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
          <Button type="Submit" variant="contained" color="primary">
            Submit
          </Button>
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

export default Register;
