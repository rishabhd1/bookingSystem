import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { setAlert } from "../../actions/alert";
import { booking } from "../../actions/booking";
import { payment } from "../../actions/payment";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Register from "../auth/Register";

const Payment = ({ setAlert, payment, booking }) => {
  const [formData, setFormData] = useState({
    pickUpPoint: "",
    dropOffPoint: ""
  });

  const { pickUpPoint, dropOffPoint, cardNumber, name } = formData;

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
            name="pickUpPoint"
            placeholder="Pick Up Address"
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <TextField
            value={dropOffPoint}
            onChange={e => onChange(e)}
            name="dropOffPoint"
            placeholder="Drop Off Address"
            variant="outlined"
          />
        </div>
        <h1>Enter Payment Details</h1>
        <div className="form-group">
          <TextField
            value={cardNumber}
            onChange={e => onChange(e)}
            name="cardNumber"
            placeholder="Card Number"
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <TextField
            value={name}
            onChange={e => onChange(e)}
            name="name"
            placeholder="Name on Card"
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <Button
            component={Link}
            to="/finalpage"
            type="Submit"
            variant="contained"
            color="primary"
          >
            Confirm Payment
          </Button>
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

// mapStateToProps = state => ({
//   booking: state.booking
// });

export default connect(
  null,
  { setAlert, payment, booking }
)(Payment);
