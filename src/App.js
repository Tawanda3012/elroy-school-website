import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SocialMediaBar from "./components/SocialMediaBar";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import About from "./pages/AboutUsPage";

function App() {
  return (
    <BrowserRouter>
      <SocialMediaBar />
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
