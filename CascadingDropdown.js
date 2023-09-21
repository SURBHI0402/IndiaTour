import React, { useState } from 'react';
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import userData from './csvjson.json';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

import './CascadingDropdowns.css'; // CSS file for styling

const CascadingDropdowns = () => {
  const states = [
    "Maharashtra", "Goa", "Rajasthan", "Tamil Nadu", "Kerala", "Sikkim", "Meghalaya",
    "Himachal Pradesh", "Uttar Pradesh", "Madhya Pradesh"
  ];

  const places = {
    "Maharashtra": ["Gateway of India", "Ajanta and Ellora Caves", "Elephanta Caves", "Shirdi Sai Baba", "Lonavla-Khandala","Mahbaleshwar","Matheran","Tadoba Andhari Tiger Reserve","Ajanta","Kolhapur"],
    "Goa": ["Baga Beach", "Calangute Beach", "Old Goa", "Dudhsagar Falls", "Fort Aguada","Anjuna Flea Market","Palolem Beach","Chapora Fort","Dudhsagar Spice Plantations","Dona Paula"],
    "Rajasthan": ["Jaipur", "Udaipur", "Jaisalmer", "Jodhpur", "Pushkar","Ajmer","Ranthambore National Park","Chittorgarh Fort","Mount Abu","Bikaner"],
    "Tamil Nadu": ["Chennai", "Mahabalipuram", "Madurai", "Kodaikanal", "Ooty","Thanjavur","Rameshwaram","Kanyakumari","Coimbatore","Pondicherry"],
    "Kerala": ["Alleppey", "Munnar", "Kochi (Cochin)", "Wayanad", "Thekkady","Kumarakom","Kovalam","Varkala","Athirappilly","Thrissur"],
    "Sikkim": ["Gangtok", "Tsomgo Lake", "Nathula Pass", "Pelling", "Yuksom","Zuluk","Lachung and Lachen","Ravangla","Gurudongmar Lake","Namchi"],
    "Meghalaya": ["Shillong", "Cherrapunji", "Mawlynnong", "Dawki", "Nongkhnum","Mawsynram","Nohsngithiang Falls","Balpakram National Park","Laithlum Canyons","Nongpoh"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala and McLeod Ganj", "Spiti Valley", "Dalhousie","Kullu","Kasol","Kinnaur","Chamba","Palampur"],
    "Uttar Pradesh": ["Agra", "Varanasi", "Lucknow", "Allahabad", "Mathura and Vrindavan","Ayodhya","Sarnath","Jhansi","Dudhwa National Park","Chitrakoot"],
    "Madhya Pradesh": ["Khajuraho", "Bhopal", "Gwalior", "Indore", "Mandu","Ujjain","Sanchi","Jabalpur","Pachmarhi","Orchha"]
  };

  const [selectedState, setSelectedState] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedPlace(""); // Reset selected place when the state changes
    setFilteredData([]);
  };

  const handlePlaceChange = (e) => {
    setSelectedPlace(e.target.value);
    const filtered = userData.data.filter(item => item.State === selectedState && item.Place === e.target.value);
    setFilteredData(filtered);
  };

  return (
<>
<div className="navbar-chart">
<header>
        <Link to="#" className="brand">Travel</Link>
        <NavBar/>
        <div className="menu-btn">

        </div>

    </header>
    </div>
 <div className="chart">
    <div className="chartcontainer">
      <div className="header">
        <h1 className='edit'>Tourism data from 2018-2023</h1>
      </div>
      <div className="content">
        <div>
          <label>Select State:</label>
          <select value={selectedState} onChange={handleStateChange}>
            <option value="">-- Select State --</option>
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        {selectedState && (
          <div>
            <label>Select Place:</label>
            <select value={selectedPlace} onChange={handlePlaceChange}>
              <option value="">-- Select Place --</option>
              {places[selectedState].map(place => (
                <option key={place} value={place}>{place}</option>
              ))}
            </select>
          </div>
        )}
        {filteredData.length > 0 && (
          <div className="chart-container">
            <ResponsiveContainer>
              <BarChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Population" fill="#8884d8" barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
    </div>
    </>
  );
};

export default CascadingDropdowns;

