const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

router.post(
  "/",
  [
    check("cardNumber", "Card Number is required")
      .exists()
      .isLength({ min: 12 })
      .isNumeric(),
    check("name", "Name is required").isEmpty()
  ],
  async (req, res) => {
    let valid = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      valid = true;
    }

    res.json({ valid });
  }
);

module.exports = router;
