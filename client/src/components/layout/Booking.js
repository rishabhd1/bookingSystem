import React, { Fragment, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import PropTypes from "prop-types";
import Register from "../auth/Register";
import { setAlert } from "../../actions/alert";
import { booking } from "../../actions/booking";
import { connect } from "react-redux";

const Landing = ({ setAlert, booking }) => {
  const [formData, setFormData] = useState({
    destination: "",
    driver: ""
  });

  const { destination, driver } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (destination && driver) {
      booking({ destination, driver });
    } else {
      setAlert("All fields are required", "danger");
    }
  };

  return (
    <Fragment>
      <div align="center">
        <h1>BOOK YOUR TAXI</h1>
        <br />
        <h5>From Bangalore To</h5>
        <br />
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <TextField
              value={destination}
              onChange={e => onChange(e)}
              name="destination"
              placeholder="Destination"
              variant="outlined"
            />
          </div>
          <div className="form-group">
            <Select
              native
              value={driver}
              displayEmpty
              name="driver"
              onChange={e => onChange(e)}
            >
              <option value="" selected>
                Select Driver
              </option>
              <option value="15">Driver - 15 km/h</option>
              <option value="18">Driver - 18 km/h</option>
              <option value="20">Driver - 20 km/h</option>
            </Select>
          </div>
          <div className="form-group">
            {/* <Link to="/booking"> */}
            <button type="Submit" className="btn btn-primary">
              Book
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  booking: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, booking }
)(Landing);
