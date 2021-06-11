import React, { Fragment, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { getRides } from "../../actions/rideActions";
import PropTypes from "prop-types";
import Preloader from "../layout/Preloader";
import RideItem from "./RideItem";

function RideList({ ride: { rides, loading }, getRides }) {
	useEffect(() => {
		getRides();

		// eslint-disable-next-line
	}, []);

	if (loading) {
		return <Preloader />;
	}

	return (
		<Fragment>
			<h4 className={"center-align"}>Your rides</h4>
			<br />
			{!rides || (rides && rides.length === 0) ? (
				<h5>You haven't added any rides.</h5>
			) : (
				<Fragment>
					<h5>Rides to complete:</h5>
					<TransitionGroup>
						{rides.map((ride, index) => (
							<CSSTransition key={index} timeout={300} className="item">
								<RideItem ride={ride} id={index + 1} />
							</CSSTransition>
						))}
					</TransitionGroup>
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
