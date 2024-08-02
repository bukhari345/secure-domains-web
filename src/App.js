import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Contact from "./ContactUs";
import AboutUsPage from "./AboutUs";
import Product from "./Product";
import Media from "./Media";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} exact ></Route>
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </Router>
  );
};

export default App;
