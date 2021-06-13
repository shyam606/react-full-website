import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import web from "../src/images/web_img.jpg";
import Common from './Common';

const Home=()=>{return(<>
<Common
    name="Grow your Buisness with"
    brand="Technology"
    imgsrc={web}
    visit="/service"
    btnname="Get started"
/>
</>
)}

export default Home;