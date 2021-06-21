import React, { useState } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import { addRide } from "../../actions/rideActions";

function AddRideModal({ addRide }) {
	const [ride, setRide] = useState({
		start: "",
		end: "",
		distance: "",
		issue: "",
		schedule: "",
	});
	const { start, end, distance, schedule } = ride;

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
		if (start === "" || end === "" || distance === "" || schedule === "") {
			M.toast({ html: "Please fill in all the fields!" });
		} else {
			addRide(ride);

			M.toast({ html: "Ride added successfully!" });

			setRide({
				start: "",
				end: "",
				distance: "",
				issue: "",
				schedule: "",
			});
		}
	};

	return (
		<div id="add-ride-modal" className={"modal"}>
			<div className="modal-content">
				<h5 className={"center-align"}>Add a new ride</h5>

				<div className="row">
					<form className="col s12" onSubmit={onSubmit}>
						<div className="row">
							<div className="input-field col s11">
								<i className="material-icons prefix">location_on</i>
								<input
									id="starting_location"
									className="validate"
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
								<i className="material-icons prefix">date_range</i>
								<input
									type="date"
									id="date"
									name="schedule"
									value={schedule}
									onChange={onChange}
								/>
								<label htmlFor="date">Date </label>
							</div>
						</div>

						<div className="row">
							<div className="input-field col s12">
								<button
									className={
										"btn-block waves-effect waves-light btn green modal-close"
									}
								>
									Add
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default connect(null, { addRide })(AddRideModal);
