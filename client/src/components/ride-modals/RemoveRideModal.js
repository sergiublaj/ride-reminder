import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { clearCurrent, deleteRide } from "../../actions/rideActions";

function RemoveRideModal({
	initialState: { current },
	deleteRide,
	clearCurrent,
}) {
	const removeRide = () => {
		deleteRide(current._id);
		clearCurrent();
		M.toast({ html: "Ride removed" });
	};

	return (
		<div id="remove-ride-modal" className="modal">
			<div className="modal-content">
				<h4>Are you sure?</h4>
				<p>You are going to remove the ride</p>
			</div>
			<div className="modal-footer">
				<a
					href="/#"
					className="modal-close waves-effect waves-red btn-flat"
					onClick={removeRide}
				>
					Remove
				</a>
				<a href="/#" className="modal-close waves-effect waves-green btn-flat">
					Cancel
				</a>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	initialState: state.ride,
});

export default connect(mapStateToProps, { deleteRide, clearCurrent })(
	RemoveRideModal
);
