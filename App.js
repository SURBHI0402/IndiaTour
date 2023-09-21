import React,{useState,useEffect,} from "react";
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import NavBar from "./NavBar";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import Page9 from "./Page9";
import Page10 from "./Page10";
import Weather from "./Weather";
import CascadingDropdown from "./CascadingDropdown";
import HotelForm from "./HotelForm";

import { css } from '@emotion/react';

import {BrowserRouter, Routes,Route,Navigate} from "react-router-dom";
import RiseLoader from "react-spinners/RiseLoader";



function App() {

  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },3000);

  },[]);
  return (
    <div className="App">
   {
    loading ?(
      <div className='spinnerContainer'>
    <RiseLoader>
     
      <center>
       
        color={"#00eefd"}
        loading={loading}
        size={90}
        aria-label="Loading Spinner"
        data-testid="loader"
       
        </center>
       
        </RiseLoader>
       </div>
      )
      
      :
      (
      <BrowserRouter>

      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/weather" element={<Weather/>}/>
      <Route path="/page1" element={<Page1/>}/>
      <Route path="/page2" element={<Page2/>}/>
      <Route path="/page3" element={<Page3/>}/>
      <Route path="/page4" element={<Page4/>}/>
      <Route path="/page5" element={<Page5/>}/>
      <Route path="/page6" element={<Page6/>}/>
      <Route path="/page7" element={<Page7/>}/>
      <Route path="/page8" element={<Page8/>}/>
      <Route path="/page9" element={<Page9/>}/>
      <Route path="/page10" element={<Page10/>}/>
      <Route path="/CascadingDropdown" element={<CascadingDropdown/>}/>
      <Route path="/navBar" element={<NavBar/>}/>
     
      <Route path="/HotelForm" element={<HotelForm/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>


      </Routes>
 
     </BrowserRouter>
      )
   }

     
    </div>
  );
}

export default App;
