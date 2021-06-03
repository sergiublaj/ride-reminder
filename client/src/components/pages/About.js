import React, {Fragment} from "react";

function About() {
   const year = new Date().getFullYear();

   return (
      <Fragment>
         <h4>This app keeps the track of your bike rides.</h4>
         <br />
         <p>Simple use, log your ride and go outside!</p>
         <br />
         <bol>Version: 1.0.0</bol>
         <br />
         <p>©SergiuMR, ad {year}</p>
      </Fragment>
   );
}

export default About;