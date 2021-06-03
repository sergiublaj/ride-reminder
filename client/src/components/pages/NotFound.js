import React, {Fragment} from "react";
import error from "./error.png";

function NotFound() {
   return (
      <Fragment>
         <img id={"not-found"} alt="" src={error}/>
         <h4>Not found!</h4>
         <br/>
         <p>The page you are looking for was not found...</p>
      </Fragment>
   );
}

export default NotFound;
