import React, {Fragment} from "react";
import RideItem from "./RideItem";

function RideList() {
   const list = [
      {
         "id": 1,
         "start": "iasi",
         "end": "suceava",
         "distance": 12,
         "date": new Date()
      },
      {
         "id": 2,
         "start": "bacau",
         "end": "suceava",
         "distance": 32,
         "date": new Date()
      }
   ];

   return (
      <Fragment>
         <h4 className={"center-align"}>Your rides</h4>
         <br />
         {list.length === 0 ?
            (<h5>You haven't added any rides.</h5>) :
            (<Fragment>
               <h5>Rides to complete:</h5>
               <ul> {list.map(ride => <li key={ride.id}><RideItem ride={ride} /></li>)} </ul>
            </Fragment>)}
      </Fragment>
   );
}

export default RideList;