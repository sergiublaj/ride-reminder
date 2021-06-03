import React from "react";
import Moment from "react-moment";

function RideItem({ride: {id, start, end, distance, date}}) {

   return (
      <div className="card">
         <i className={"fas fa-biking fa-2x"} /> {" "}
         <span style={{fontSize: 23}}>Route #<span style={{color: "red"}}>{id}</span></span>
         <br />
         <span>From <span style={{color: "purple"}}>{start}</span> to <span style={{color: "brown"}}>{end}</span></span>
         <br />
         <span>Total distance: <span style={{color: "grey"}}>{distance}</span> kilometers</span>
         <br />
         <span>Date added: <span style={{color: "grey"}}> <Moment format="Do MMMM YYYY, HH:mm:ss">{date}</Moment></span></span>
         <a href="#remove-ride-modal" className={"modal-trigger secondary-content"}><i className={"material-icons"}>delete</i></a>
         <a href="#edit-ride-modal" className={"modal-trigger secondary-content"}><i className={"material-icons"}>edit</i></a>
      </div>
   );
}

export default RideItem;