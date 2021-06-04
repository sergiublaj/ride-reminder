import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getRides } from "../../actions/rideActions";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import RideItem from "./RideItem";

function RideList({ ride: { rides, loading }, getRides }) {
	useEffect(() => {
		getRides();
	}, []);

	if (loading || rides === null) {
		return <Spinner />;
	}

	return (
		<Fragment>
			<h4 className={"center-align"}>Your rides</h4>
			<br />
			{rides.length === 0 ? (
				<h5>You haven't added any rides.</h5>
			) : (
				<Fragment>
					<h5>Rides to complete:</h5>
					<ul>
						{" "}
						{rides.map((ride) => (
							<li key={ride.id}>
								<RideItem ride={ride} />
							</li>
						))}{" "}
					</ul>
				</Fragment>
			)}
		</Fragment>
	);
}

const mapStateToProps = (state) => ({
	ride: state.ride,
});

RideList.propTypes = {
	ride: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getRides })(RideList);
