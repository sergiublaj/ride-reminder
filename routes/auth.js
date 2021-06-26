const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const { body, validationResult } = require("express-validator");

const User = require("../models/User");

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private (token required)
router.get("/", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.json(user);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server error");
	}
});

// @route    POST api/auth
// @desc    Auth user & get token
// @access  Public (no token required)
router.post(
	"/",
	[
		body("email", "Please enter a valid email").isEmail(),
		body("password", "Please enter your password").isLength({ min: 5 }),
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (!user) {
				return res.status(400).json({ msg: "User not registered" });
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res.status(400).json({ msg: "Invalid credentials" });
			}

			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				config.get("jwtSecret"),
				{
					expiresIn: 3600,
				},
				(error, token) => {
					if (error) {
						throw error;
					}
					res.json({ token });
				}
			);
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Server error");
		}
	}
);

// @route	API/AUTH
// @desc		Update user's distance
// @access	Private (token required)
router.put("/:id", auth, async (req, res) => {
	const { name, email, age, distance } = req.body;

	const userFields = {};
	if (name) userFields.name = name;
	if (email) userFields.email = email;
	if (age) userFields.age = age;
	if (distance) userFields.distance = distance;

	try {
		let user = await User.findById(req.params.id);

		if (!user) {
			return res.status(404).json({ msg: "User not found" });
		}

		userFields.distance += user.distance;

		user = await User.findByIdAndUpdate(
			req.params.id,
			{ $set: userFields },
			{ new: true }
		);

		res.json(user);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;
