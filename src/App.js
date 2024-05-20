import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Homepage from "./pages/Homepage";
import AboutUsPage from "./pages/AboutUsPage";
import SocialMediaBar from "./components/SocialMediaBar";
import Header from "./components/Header";
import ContactPage from "./pages/ContactPage";
import AdmissionPage from "./pages/AdmissionPage";
import InstructionPage from "./pages/InstructionPage";
import ResourcesPage from "./pages/ResourcesPage";
import NewsEventsPage from "./pages/NewsEventsPage";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <SocialMediaBar />
              <Header />
              <Hero />
              <Homepage />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <SocialMediaBar />
              <Header />
              <AboutUsPage />
            </div>
          }
        />
        <Route
          path="/admissions"
          element={
            <div>
              <SocialMediaBar />
              <Header />
              <AdmissionPage />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <SocialMediaBar />
              <Header />
              <ContactPage />
            </div>
          }
        />
        <Route
          path="/instruction"
          element={
            <div>
              <SocialMediaBar />
              <Header />
              <InstructionPage />
            </div>
          }
        />
        <Route
          path="/news"
          element={
            <div>
              <SocialMediaBar />
              <Header />
              <NewsEventsPage />
            </div>
          }
        />
        <Route
          path="/resources"
          element={
            <div>
              <SocialMediaBar />
              <Header />
              <ResourcesPage />
            </div>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
   
  );
}

export default App;