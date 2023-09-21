import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import search from "./search.png";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [ans, setAns] = useState("");

  const hCity = (event) => {
    setCity(event.target.value);
  };

  const find = (event) => {
    event.preventDefault();
    let a1 = "https://api.openweathermap.org/data/2.5/weather";
    let a2 = "?q=" + city;
    let a3 = "&appid=" + "7f9879e9039f9047b7221233b173e305";
    let a4 = "&units=metric"; 
    let urladd = a1 + a2 + a3 + a4;

    axios
      .get(urladd)
      .then((res) => {
        let temp = res.data.main.temp;
        let wd = res.data.weather[0].main;
        let msg = "Temp=" + temp + " Weather=" + wd;
        setAns(msg);
      })
      .catch((err) => {
        if (err.code === "ERR_BAD_REQUEST") {
          setAns("invalid city name");
        }
      });
  };

  return (
    <>
      <header>
        <Link to="#" className="brand">Travel</Link>
        <NavBar/>
        <div className="menu-btn">

        </div>

    </header>
    
  
      <center>
       
      
        <div className="card">
        <h1>Weather Page</h1>
        <br/>
        <form onSubmit={find}>
          <input
            type="text"
            placeholder="Enter the name of the city"
            onChange={hCity} // Add the onChange handler to update the city state
          />
          <br />
          <br />
          <input type="submit" value="Find"/>
        </form>
        <h1>{ans}</h1>
        </div>
     
      </center>
      
    </>
  );
}

export default Weather;
