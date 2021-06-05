import React, { Fragment, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { getRides } from "../../actions/rideActions";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import RideItem from "./RideItem";

function RideList({ ride: { rides, loading }, getRides }) {
	useEffect(() => {
		getRides();

		// eslint-disable-next-line
	}, []);

	if (loading) {
		return <Spinner />;
	}

	return (
		<Fragment>
			<h4 className={"center-align"}>Your rides</h4>
			<br />
			{!rides || (rides && rides.length === 0) ? (
				<h5>You haven't added any rides.</h5>
			) : (
				<TransitionGroup>
					<h5>Rides to complete:</h5>
					{rides.map((ride) => (
						<CSSTransition key={ride.id} timeout={300} classNames="item">
							<RideItem ride={ride} />
						</CSSTransition>
					))}
				</TransitionGroup>
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
