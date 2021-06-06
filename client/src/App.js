import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/routing/PrivateRoute";

import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
	useEffect(() => {
		M.AutoInit();
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<div className={"container"}>
						<Switch>
							<PrivateRoute exact path="/" component={Home} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/register" component={Register} />
							<Route exact path="/about" component={About} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</Fragment>
			</Router>
		</Provider>
	);
}

export default App;
