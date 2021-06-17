import React from "react";

function NotificationItem({ item: { title, message } }) {
	return (
		<div className="card yellow row">
			<div className="col s0">
				<br />
				<i id="mark-read" className="material-icons">
					done
				</i>
			</div>
			<div className="col s11">
				<span className="card-title" style={{ fontWeight: "bold" }}>
					{title}
				</span>
				<br />
				<span style={{ textDecoration: "line-through" }}>{message}</span>
			</div>
		</div>
	);
}

export default NotificationItem;
