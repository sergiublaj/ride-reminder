import React, { Fragment } from "react";
import { connect } from "react-redux";
import NotificationItem from "./NotificationItem";

function NotificationList() {
	const list = [
		{ title: "notification 1", message: "message 1" },
		{ title: "notification 2", message: "message 2" },
	];

	return (
		<Fragment>
			{list.length ? (
				list.map((item, index) => <NotificationItem key={index} item={item} />)
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
