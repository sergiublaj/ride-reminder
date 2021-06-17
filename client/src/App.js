import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import { loadUser } from "./actions/authActions";
import { connect } from "react-redux";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
import Notifications from "./components/pages/Notifications";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App({ loadUser }) {
	useEffect(() => {
		loadUser();

		// eslint-disable-next-line
	}, []);

	return (
		<Router>
			<Fragment>
				<Navbar />
				<div className={"container"}>
					<Switch>
						<PrivateRoute exact path="/" component={Home} />
						<PrivateRoute
							exact
							path="/notifications"
							component={Notifications}
						/>
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/about" component={About} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Fragment>
		</Router>
	);
}

export default connect(null, { loadUser })(App);
