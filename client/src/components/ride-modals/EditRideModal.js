import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { updateRide } from "../../actions/rideActions";

function EditRideModal({ initialState: { current }, updateRide }) {
	const [ride, setRide] = useState({
		start: "",
		end: "",
		distance: "",
	});

	useEffect(() => {
		if (current) {
			setRide(current);
		}
		M.updateTextFields();
	}, [current]);

	const { start, end, distance } = ride;

	const swapLocations = () => {
		const [start, end] = [ride.end, ride.start];
		if (start === "" && end === "") {
			return;
		}
		setRide({
			...ride,
			start,
			end,
		});
		M.toast({ html: "Locations swapped!" });
	};

	const onChange = (event) => {
		const { name, value } = event.target;
		setRide({
			...ride,
			[name]: value,
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (start === "" || end === "" || distance === "") {
			M.toast({ html: "Please fill in all the fields!" });
		} else {
			updateRide(ride);
			M.toast({ html: "Ride updated successfully!" });
		}
	};

	return (
		<div id="edit-ride-modal" className={"modal"}>
			<div className="modal-content">
				<h5 className={"center-align"}>Edit ride</h5>

				<div className="row">
					<form className="col s12" onSubmit={onSubmit}>
						<div className="row">
							<div className="input-field col s11">
								<i className="material-icons prefix">location_on</i>
								<input
									id="starting_location"
									className="validate"
									placeholder=" "
									type="text"
									name="start"
									value={start}
									onChange={onChange}
								/>
								<label htmlFor="starting_location">Starting location </label>
							</div>
							<i
								className="material-icons swap-routes col s1 secondary-content"
								onClick={swapLocations}
							>
								swap_vert
							</i>
						</div>

						<div className="row">
							<div className="input-field col s12">
								<i className="material-icons prefix">flag</i>
								<input
									id="ending_location"
									className="validate"
									placeholder=" "
									type="text"
									name="end"
									value={end}
									onChange={onChange}
								/>
								<label htmlFor="ending_location">Ending location </label>
							</div>
						</div>

						<div className="row">
							<div className="input-field col s12">
								<i className="material-icons prefix">navigation</i>
								<input
									id="distance"
									className="validate"
									placeholder=" "
									type="number"
									min={1}
									max={1000}
									name="distance"
									value={distance}
									onChange={onChange}
								/>
								<label htmlFor="distance">Distance </label>
							</div>
						</div>

						<div className="row">
							<div className="input-field col s12">
								<button
									className={
										"btn-block waves-effect waves-light btn green modal-close"
									}
								>
									Edit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	initialState: state.ride,
});

export default connect(mapStateToProps, { updateRide })(EditRideModal);
