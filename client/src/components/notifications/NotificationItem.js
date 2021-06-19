import React, { useState, useEffect } from "react";

function NotificationItem({ title, message }) {
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
				<input
					className="circle"
					type="checkbox"
					value={checked}
					onChange={onChange}
				/>
				<span></span>
			</label>
			<div className="col s11">
				<span className="card-title" style={{ fontWeight: titleStyle }}>
					{title}
				</span>
				<br />
				<span style={{ textDecoration: messageStyle }}>{message}</span>
			</div>
		</div>
	);
}

export default NotificationItem;
