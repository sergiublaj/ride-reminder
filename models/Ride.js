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
	issue: {
		type: Date,
		default: new Date(),
	},
	schedule: {
		type: Date,
		required: true,
	},
});

module.exports = mongoose.model("ride", RideSchema);
