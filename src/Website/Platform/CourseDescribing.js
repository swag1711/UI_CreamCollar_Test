import Home from "./Dashboard/Home";
import Headers from "../Headers";
import Describing from './Journey/Describing';
import React ,{useEffect, useState}from 'react';
function CourseDescribing()  {
const content=<  Describing/>
  
    return (
  <div >
     <Headers/>
        <Home contentdes={content}/>
   
  </div> 
    );
  }
  
  export default CourseDescribing;
  