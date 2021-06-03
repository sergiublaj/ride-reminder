const mongoose = require("mongoose");

const RideSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
	},
	start: {
		type: String,
		required: true,
	},
	end: {
		type: String,
		required: true,
	},
	distance: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		default: new Date(),
	},
});

module.exports = mongoose.model("ride", RideSchema);
