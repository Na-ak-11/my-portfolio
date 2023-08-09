import recat from 'react';
import './index.css';
import Home from './routes/Home';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
      </Routes>
    
    </>
  );
};



export default App;
