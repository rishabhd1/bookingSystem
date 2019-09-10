const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/booking", require("./routes/api/booking"));
app.use("/api/payment", require("./routes/api/payment"));
app.use(express.static(path.join(__dirname, "client/build")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
