import React, { Fragment } from "react";
import NotificationList from "../notifications/NotificationList";

function Notifications() {
	return (
		<Fragment>
			<h4 className="center-align">Your notifications here</h4>
			<NotificationList />
		</Fragment>
	);
}

export default Notifications;
