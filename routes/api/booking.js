const express = require("express");
const router = express.Router();
const axios = require("axios");

// @route  POST api/booking
// @desc   Booking logic
// @access Private
router.post("/", async (req, res) => {
  const { destination, driver } = req.body;

  try {
    const mapResult = await axios.get(
      `https://www.distance24.org/route.json?stops=bangalore|${destination}`
    );

    const distance = mapResult.data.distance;

    let price = 4500;

    if (distance > 300) {
      if (driver === 15) {
        price = distance * 15;
      } else if (driver === 18) {
        price = distance * 18;
      } else if (driver === 20) {
        price = distance * 20;
      }
    }

    res.json({ price });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
