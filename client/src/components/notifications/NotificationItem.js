import React, { useState, useEffect } from "react";
import Moment from "react-moment";

function NotificationItem({ ride: { start, end, schedule } }) {
	const [checked, setChecked] = useState(true);
	const [titleStyle, setTitleStyle] = useState("normal");
	const [messageStyle, setMessageStyle] = useState("line-through");

	const onChange = () => {
		setChecked(!checked);
	};

	useEffect(() => {
		if (checked) {
			setTitleStyle("bold");
			setMessageStyle("none");
		} else {
			setTitleStyle("normal");
			setMessageStyle("line-through");
		}
	}, [checked]);

	return (
		<div className="card yellow row">
			<label className="col s0">
				<br />
				<br />
				<input
					className="circle"
					type="checkbox"
					value={checked}
					onChange={onChange}
				/>
				<span></span>
			</label>
			<div className="offset-s1">
				<span className="card-title" style={{ fontWeight: titleStyle }}>
					Missed ride
				</span>
				<br />
				<span style={{ textDecoration: messageStyle }}>
					From {start} to {end}
				</span>
				<br />
				<span style={{ textDecoration: messageStyle, color: "green" }}>
					Date: <Moment format="Do MMMM YYYY">{schedule}</Moment>
				</span>
			</div>
		</div>
	);
}

export default NotificationItem;
