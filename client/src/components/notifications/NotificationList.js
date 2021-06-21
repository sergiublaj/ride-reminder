import React, { Fragment } from "react";
import { connect } from "react-redux";
import NotificationItem from "./NotificationItem";

function NotificationList({ initialState: { rides } }) {
	const now = new Date();

	return (
		<Fragment>
			{rides.length ? (
				rides.map(
					(ride) =>
						now.getTime() - new Date(ride.schedule).getTime() > 0 && (
							<NotificationItem key={ride._id} ride={ride} />
						)
				)
			) : (
				<h5>No notifications to show.</h5>
			)}
		</Fragment>
	);
}

const mapStateToProps = (state) => ({
	initialState: state.ride,
});

export default connect(mapStateToProps, null)(NotificationList);
