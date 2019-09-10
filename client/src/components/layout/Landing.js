import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Landing = () => {
  return (
    <Fragment>
      <div align="center">
        <Button
          component={Link}
          to="/booking"
          variant="contained"
          color="primary"
        >
          BOOK TAXI
        </Button>
      </div>
    </Fragment>
  );
};

export default Landing;
