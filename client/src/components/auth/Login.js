import React, {Fragment, useState} from "react";
import M from "materialize-css/dist/js/materialize.min.js";

function Login() {
   const [user, setUser] = useState({
      email: "",
      password: ""
   });

   const {email, password} = user;

   const onSubmit = (event) => {
      event.preventDefault();
      if (email === "" || password === "") {
         M.toast({html: "Please enter an email and a password!"});
      } else {
         M.toast({html: `${email} and ${password}`});

         setUser({email: "", password: ""});
      }
   };

   const onChange = (event) => {
      const {name, value} = event.target;
      setUser({
         ...user,
         [name]: value
      });
   };

   return (
      <Fragment>
         <form className={"row s2"} onSubmit={onSubmit}>
            <div className={"row"}>
               <h4 className={"center-align"}>
                  Log in
               </h4>
            </div>

            <div className="row">
               <div className="input-field col s6 offset-l3">
                  <input className="validate" type="text" name="email" value={email} onChange={onChange}/>
                  <label htmlFor="email">Email</label>
               </div>
            </div>

            <div className="row">
               <div className="input-field col s6 offset-l3">
                  <input className="validate" type="password" name="password" value={password} onChange={onChange}/>
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

export default Login;
