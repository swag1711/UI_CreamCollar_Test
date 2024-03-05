import Home from "./Dashboard/Home";
import Headers from "../Headers";
import Profile_page from './../Profile/Profile_page';
import { useParams } from 'react-router-dom';
import React ,{useEffect, useState}from 'react';
function ProfileAccount()  {
const content=<Profile_page/>
  
    return (
  <div >
     <Headers/>
        <Home contentdes={content}/>
      
  </div> 
    );
  }
  
  export default ProfileAccount;
  