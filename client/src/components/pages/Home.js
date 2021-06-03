import React, {Fragment} from "react";

import RideList from "../layout/RideList";
import AddRideButton from "../layout/AddRideButton";
import AddRideModal from "../rides/AddRideModal";
import EditRideModal from "../rides/EditRideModal";
import RemoveRideModal from "../rides/RemoveRideModal";

function Home() {
   return (
      <Fragment>
         <RideList />
         <AddRideButton />
         <AddRideModal />
         <EditRideModal />
         <RemoveRideModal />
      </Fragment>
   );
}

export default Home;