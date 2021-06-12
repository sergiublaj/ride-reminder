const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { body, validationResult } = require("express-validator");

const User = require("../models/User");

// @route   POST  api/users
// @desc    Register an user
// @access  Public (no token required)
router.post(
	"/",
	[
		body("name", "Please enter a name").notEmpty(),
		body("name", "Please enter a valid name").isLength({ min: 5 }),
		body("email", "Please enter a valid email").isEmail(),
		body("age", "Please enter a valid age").isAlphanumeric(),
		body("password", "Please enter a valid password").isLength({ min: 5 }),
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, age, password } = req.body;
		console.log("req :>> ", req);
		try {
			let user = await User.findOne({ email });
			if (user) {
				return res.status(400).json({ msg: "User already registered" });
			}

			user = new User({
				name,
				email,
				age,
				password,
			});

			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();

			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				config.get("jwtSecret"),
				{ expiresIn: 3600 },
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

module.exports = router;
