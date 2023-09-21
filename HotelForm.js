import React, { useState } from 'react';
import NavBar from "./NavBar";
import { Link } from "react-router-dom";


const HotelForm = () => {
 
  return (
    <>
      <header>
        <Link to="#" className="brand">Travel</Link>
        <NavBar/>
        <div className="menu-btn">

        </div>

    </header>
    <div className="hotel">
    
    <h1>For hotel Recommendations</h1>
    <br/>

    
    <h2>Click here</h2>
 
</div>
    
    


    
    </>
  );
}

export default HotelForm;
