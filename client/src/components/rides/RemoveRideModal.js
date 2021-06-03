import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";

function RemoveRideModal({current}) {
   const removeRide = (event) => {
      M.toast({html: "Ride removed"})
   }

   return (
      <div id="remove-ride-modal" className="modal">
         <div className="modal-content">
            <h4>Are you sure?</h4>
            <p>You are going to remove the ride</p>
         </div>
         <div className="modal-footer">
            <a href="/#" className="modal-close waves-effect waves-green btn-flat" onClick={removeRide}>Remove</a>
         </div>
      </div>
   );
}

export default RemoveRideModal;