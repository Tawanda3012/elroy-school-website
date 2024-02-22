import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFoundPage"; // Import the NotFound component
import Home from "./pages/Homepage";
import About from "./pages/AboutUsPage";
import SocialMediaBar from "./components/SocialMediaBar";
import Header from "./components/Header";
import DynamicSlider from "./components/DynamicSlider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <SocialMediaBar /> 
              <Header /> 
              <DynamicSlider /> 
              <Home />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <SocialMediaBar /> 
              <Header /> 
              <DynamicSlider /> 
              <About />
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;