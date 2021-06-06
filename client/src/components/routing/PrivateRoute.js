import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({
	component: Component,
	initialState: { isAuthenticated, loading },
	...rest
}) {
	return (
		<Route
			{...rest}
			render={(props) =>
				!isAuthenticated && !loading ? (
					<Redirect to="/login" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
}

const mapStateToProps = (state) => ({
	initialState: state.auth,
});

export default connect(mapStateToProps, null)(PrivateRoute);
