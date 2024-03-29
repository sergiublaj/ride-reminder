import React, { Fragment, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import PersonalInfo from "../layout/PersonalInfo";
import Weather from "../layout/Weather";
import RideList from "../rides/RideList";
import AddRideButton from "../layout/AddRideButton";
import AddRideModal from "../ride-modals/AddRideModal";
import EditRideModal from "../ride-modals/EditRideModal";
import RemoveRideModal from "../ride-modals/RemoveRideModal";

function Home() {
	useEffect(() => {
		M.AutoInit();

		// eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			<div className="grid-2">
				<PersonalInfo />
				<Weather />
			</div>
			<RideList />
			<AddRideButton />
			<AddRideModal />
			<EditRideModal />
			<RemoveRideModal />
		</Fragment>
	);
}

export default Home;
