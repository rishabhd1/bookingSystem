import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Register from "../auth/Register";
import { setAlert } from "../../actions/alert";
import { payment } from "../../actions/payment";
import { connect } from "react-redux";

const Landing = ({ setAlert, payment: { valid } }) => {
  const transactionSuccess = <h1>Transaction Successful</h1>;
  const transactionFail = <h1>Transaction Failed</h1>;
  return (
    <Fragment>
      <div align="center">
        {<Fragment>{valid ? transactionSuccess : transactionFail}</Fragment>}
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  valid: PropTypes.bool
};

const mapStateToProps = state => ({
  valid: state.payment.valid
});

export default connect(
  mapStateToProps,
  { setAlert, booking }
)(Landing);
