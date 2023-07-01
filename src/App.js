import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Proizvodi from "./components/proizvodi/proizvodi";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Proizvodi" element={<Proizvodi />} />
      </Routes>
    </Router>
  );
}

export default App;
