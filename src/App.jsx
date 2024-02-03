import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About";
import Contact from "./Components/Contact/Contact";
import Services from "./Pages/Services";
import Properties from "./Pages/Properties";
import Prices from "./Pages/Prices";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/places" element={<Properties></Properties>}></Route>
          <Route path="/prices" element={<Prices></Prices>}></Route>
        </Routes>
        <Contact></Contact>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
