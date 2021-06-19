import React, { Fragment } from "react";
import { connect } from "react-redux";
import NotificationItem from "./NotificationItem";

function NotificationList({ initialState: { rides } }) {
	return (
		<Fragment>
			{rides.length ? (
				rides.map((ride) => (
					<NotificationItem
						key={ride.id}
						title={"Missed ride"}
						message={`From ${ride.start} to ${ride.end}`}
					/>
				))
			) : (
				<h4>No notifications</h4>
			)}
		</Fragment>
	);
}

const mapStateToProps = (state) => ({
	initialState: state.ride,
});

export default connect(mapStateToProps, null)(NotificationList);
