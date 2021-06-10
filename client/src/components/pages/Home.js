import React, { Fragment, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import RideList from "../layout/RideList";
import AddRideButton from "../layout/AddRideButton";
import AddRideModal from "../rides/AddRideModal";
import EditRideModal from "../rides/EditRideModal";
import RemoveRideModal from "../rides/RemoveRideModal";

function Home() {
	useEffect(() => {
		M.AutoInit();

		// eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			<RideList />
			<AddRideButton />
			<AddRideModal />
			<EditRideModal />
			<RemoveRideModal />
		</Fragment>
	);
}

export default Home;
