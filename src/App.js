import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Proizvodi from "./components/proizvodi/proizvodi";
import Contact from "./components/contact/contaxt";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Proizvodi" element={<Proizvodi />} />
        <Route path="/Kontakt" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
