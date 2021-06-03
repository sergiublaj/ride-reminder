const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "Welcome to Ride Reminder API!" }));

// Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/rides", require("./routes/rides"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`[SERVER] Server started on port ${PORT}`));
