const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { body, validationResult } = require("express-validator");

const Ride = require("../models/Ride");

// @route   GET api/rides
// @desc    Get all users rides
// @access  Private (token required)
router.get("/", auth, async (req, res) => {
	try {
		const rides = await Ride.find({ user: req.user.id }).sort({ date: -1 });
		res.json({ rides });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server error");
	}
});

// @route   POST api/rides
// @desc    Add a ride
// @access  Private (token required)
router.post(
	"/",
	[
		auth,
		[
			body("start", "Start location is required").notEmpty(),
			body("end", "End location is required").notEmpty(),
			body("distance", "Distance is required").notEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { start, end, distance, date } = req.body;

		try {
			const newRide = new Ride({
				start,
				end,
				distance,
				date,
				user: req.user.id,
			});

			const ride = await newRide.save();

			res.json(ride);
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Server error");
		}
	}
);

// @route   PUT api/rides/:id
// @desc    Update ride
// @access  Private (token required)
router.put("/:id", auth, async (req, res) => {
	const { start, end, distance } = req.body;

	const rideFields = {};
	if (start) rideFields.start = start;
	if (end) rideFields.end = end;
	if (distance) rideFields.distance = distance;

	try {
		let ride = await Ride.findById(req.params.id);

		if (!ride) {
			return res.status(404).json({ msg: "Ride not found" });
		}

		if (ride.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: "Not authorized" });
		}

		ride = await Ride.findByIdAndUpdate(
			req.params.id,
			{ $set: rideFields },
			{ new: true }
		);

		res.json(ride);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server error");
	}
});

// @route   DELETE api/rides/:id
// @desc    Delete contact
// @access  Private (token required)
router.delete("/:id", auth, async (req, res) => {
	try {
		let ride = await Ride.findById(req.params.id);

		if (!ride) {
			return res.status(404).json({ msg: "Ride not found" });
		}

		if (ride.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: "Not authorized" });
		}

		await Ride.findByIdAndRemove(req.params.id);

		res.send("Ride removed");
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;
