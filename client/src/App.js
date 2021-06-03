import {Fragment, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
      <Router>
         <Fragment>
            <Navbar/>
            <div className={"container"}>
               <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/register" component={Register}/>
                  <Route exact path="/about" component={About}/>
                  <Route component={NotFound}/>
               </Switch>
            </div>
         </Fragment>
      </Router>
   );
}

export default App;
