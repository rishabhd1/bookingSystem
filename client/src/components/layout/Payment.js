import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import TextField from "@material-ui/core/TextField";
import Register from "../auth/Register";

const Payment = ({ setAlert, payment, booking }) => {
  const [formData, setFormData] = useState({
    pickUpPoint: "",
    dropOffPoint: ""
  });

  const { pickUpPoint, dropOffPoint } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (pickUpPoint && dropOffPoint) {
      payment({ pickUpPoint, dropOffPoint });
    } else {
      setAlert("All fields are required", "danger");
    }
  };

  return (
    <Fragment>
      <form align="center" onSubmit={e => onSubmit(e)}>
        <h1>Enter below details</h1>
        <div className="form-group">
          <TextField
            value={pickUpPoint}
            onChange={e => onChange(e)}
            name="name"
            placeholder="Name"
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <TextField
            value={dropOffPoint}
            onChange={e => onChange(e)}
            name="email"
            placeholder="Email"
            variant="outlined"
          />
        </div>
      </form>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  payment: PropTypes.func.isRequired,
  booking: PropTypes.func.isRequired
};

mapStateToProps = state => ({
  booking: state.booking
});

export default connect(
  mapStateToProps,
  { setAlert, payment, booking }
)(Payment);
