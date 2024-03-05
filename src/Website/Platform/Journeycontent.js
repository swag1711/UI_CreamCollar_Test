import Home from "./Dashboard/Home";
import Headers from "../Headers";
import Journey from './Journey/Jounney';
import React from 'react';

function Journeycontent()  {
const content=< Journey/>
  
    return (
  <div >
     <Headers/>
        <Home contentdes={content}/>
  </div> 
    );
  }
  
  export default Journeycontent;
  