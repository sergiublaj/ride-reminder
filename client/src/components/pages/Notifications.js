import React, { Fragment } from "react";
import NotificationList from "../notifications/NotificationList";

function Notifications() {
	return (
		<Fragment>
			<h5>Your notifications here</h5>
			<NotificationList />
		</Fragment>
	);
}

export default Notifications;
