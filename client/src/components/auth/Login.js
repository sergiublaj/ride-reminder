import React, { Fragment, useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import { loginUser } from "../../actions/authActions";
import { connect } from "react-redux";
import { useHistory } from "react-router";

function Login({ initialState: { isAuthenticated, error }, loginUser }) {
	const history = useHistory();

	useEffect(() => {
		if (isAuthenticated) {
			history.push("/");
		}
		console.log("error :>> ", error);
		if (
			error === "Please enter a valid email" ||
			error === "User not registered" ||
			error === "Invalid credentials"
		) {
			M.toast({ html: error });
		}
	}, [history, isAuthenticated, error]);

	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const { email, password } = user;

	const onSubmit = (event) => {
		event.preventDefault();
		if (email === "" || password === "") {
			M.toast({ html: "Please enter an email and a password!" });
		} else {
			loginUser({ email, password });
		}
	};

	const onChange = (event) => {
		const { name, value } = event.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	return (
		<Fragment>
			<form className={"row s2"} onSubmit={onSubmit}>
				<div className={"row"}>
					<h4 className={"center-align"}>Log in</h4>
				</div>

				<div className="row">
					<div className="input-field col s6 offset-l3">
						<input
							className="validate"
							type="text"
							name="email"
							value={email}
							onChange={onChange}
							required
						/>
						<label htmlFor="email">Email</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field col s6 offset-l3">
						<input
							className="validate"
							type="password"
							name="password"
							value={password}
							onChange={onChange}
							required
						/>
						<label htmlFor="password">Password</label>
					</div>
				</div>

				<button className="waves-effect waves-light btn-large btn-block btn-primary offset-l3 col s6">
					Log in
				</button>
			</form>
		</Fragment>
	);
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	initialState: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Login);
