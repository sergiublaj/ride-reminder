import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router";
import M from "materialize-css/dist/js/materialize.min.js";
import { registerUser } from "../../actions/authActions";
import { connect } from "react-redux";

function Register({ initialState: { isAuthenticated, error }, registerUser }) {
	const history = useHistory();

	useEffect(() => {
		if (isAuthenticated) {
			history.push("/");
		}

		if (error === "User already registered") {
			M.toast({ html: error });
		}
	}, [history, isAuthenticated, error]);

	const [user, setUser] = useState({
		name: "",
		email: "",
		age: "",
		password: "",
		password2: "",
	});

	const { name, email, age, password, password2 } = user;

	const onSubmit = (event) => {
		event.preventDefault();
		if (
			name === "" ||
			email === "" ||
			age === "" ||
			password === "" ||
			password2 === ""
		) {
			M.toast({ html: "Please fill in all the fields!" });
		} else if (password !== password2) {
			M.toast({ html: "Passwords do not match!" });
		} else {
			registerUser(user);

			setUser({ name: "", age: "", email: "", password: "", password2: "" });
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
					<h4 className={"center-align"}>Register</h4>
				</div>

				<div className="row">
					<div className="input-field col s6 offset-l3">
						<input
							className="validate"
							type="text"
							name="name"
							value={name}
							onChange={onChange}
						/>
						<label htmlFor="name">Name</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field col s6 offset-l3">
						<input
							className="validate"
							type="text"
							name="email"
							value={email}
							onChange={onChange}
						/>
						<label htmlFor="email">Email</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field col s6 offset-l3">
						<input
							className="validate"
							type="text"
							name="age"
							value={age}
							onChange={onChange}
						/>
						<label htmlFor="age">Age</label>
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
						/>
						<label htmlFor="password">Password</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field col s6 offset-l3">
						<input
							className="validate"
							type="password"
							name="password2"
							value={password2}
							onChange={onChange}
						/>
						<label htmlFor="password2">Confirm password</label>
					</div>
				</div>

				<button className="waves-effect waves-light btn-large btn-block btn-primary offset-l3 col s6">
					Register
				</button>
			</form>
		</Fragment>
	);
}

const mapStateToProps = (state) => ({
	initialState: state.auth,
});

export default connect(mapStateToProps, { registerUser })(Register);
