import React from 'react';
import Common from './Common';
import web from "../src/images/about.png";
const About=()=>{
    return(<>
   <Common 
   name="Welcome to About Page"
   brand="Developers"
   imgsrc={web}
   visit="/contact"
   btnname="Contact Now"
   />
</>
)}

export default About;