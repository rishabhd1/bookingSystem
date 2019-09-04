import React, { Fragment, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log("SUCCESS");
  };

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
          <Button type="Submit" variant="contained" color="primary">
            Login
          </Button>
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

export default Login;
