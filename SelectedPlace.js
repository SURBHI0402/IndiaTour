import React, { createContext, useState } from 'react';
import NavBar from "./NavBar";
import {Link} from "react-router-dom";

const SelectedPlaceContext = createContext();

const SelectedPlaceProvider = ({ children }) => {
  const [selectedPlace, setSelectedPlace] = useState("");

  return (
  
    <SelectedPlaceContext.Provider value={{ selectedPlace, setSelectedPlace }}>
      {children}
    </SelectedPlaceContext.Provider>
  );
};

export { SelectedPlaceContext, SelectedPlaceProvider };
