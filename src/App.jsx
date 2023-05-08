import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import "bootstrap/scss/bootstrap.scss";
import "./style.scss";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ShopPage from "./components/ShopPage";
import BlogPage from "./components/BlogPage";
import ContactPage from "./components/ContactPage";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComingSoonPage from "./components/ComingSoon";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/shop" Component={ShopPage} />
        <Route path="/blog" Component={BlogPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/comingsoon" Component={ComingSoonPage} />
        <Route path="/signup" Component={SignUp} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
