const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	distance: {
		type: Number,
		default: 0,
	},
});

module.exports = mongoose.model("user", UserSchema);
