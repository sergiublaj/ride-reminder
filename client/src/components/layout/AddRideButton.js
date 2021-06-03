import React, {Fragment} from "react";

function AddRideButton() {
   return (
      <Fragment>
         <div className={"fixed-action-btn"}>
            <a href="#add-ride-modal" className={"waves-effect waves-light modal-trigger btn-floating btn-large red"}>
               <i className={"material-icons medium"} >add</i>
            </a>
         </div>
      </Fragment>
   );
}

export default AddRideButton;