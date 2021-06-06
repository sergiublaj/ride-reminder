import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

function Navbar({ initialState: { user, isAuthenticated }, logoutUser }) {
	const guestLinks = (
		<Fragment>
			<li>
				<Link to="/login">Login</Link>
			</li>
			<li>
				<Link to="/register">Register</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
		</Fragment>
	);

	const userLinks = (
		<Fragment>
			<li>Hello, {user && user.name}</li>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<a href="/login" onClick={() => logoutUser()}>
					<i className="material-icons">logout</i>
				</a>
			</li>
		</Fragment>
	);

	return (
		<nav>
			<div className="nav-wrapper blue">
				<Link to="/" className="brand-logo">
					<i className={"tiny material-icons"}>directions_bike</i>
					Ride reminder
				</Link>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					{isAuthenticated ? userLinks : guestLinks}
				</ul>
			</div>
		</nav>
	);
}

const mapStateToProps = (state) => ({
	initialState: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
