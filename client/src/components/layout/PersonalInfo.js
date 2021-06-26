import React from "react";
import { connect } from "react-redux";

function PersonalInfo({ user: { name, email, age, distance } }) {
	return (
		<div className="card bg-light">
			<div>
				<i className="fas fa-user small" /> Name: {name}
			</div>
			<div>
				<i className="fas fa-envelope small" /> Email: {email}
			</div>
			<div>
				<i className="fas fa-id-card small" /> Age: {age}
			</div>
			<div>
				<i className="fas fa-flag small" /> Distance: {distance} km
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps, null)(PersonalInfo);
