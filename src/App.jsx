import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Homeque from "./components/Homeque";
import DetailView from "./components/DetailView";
import NotFound from "./pages/NotFound";
import { ContactUs } from "./pages/ContactUs"
import "./App.css";
import {Faq} from "./components/Faq";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BookingForm from "./pages/BookingForm";
import HotelBookingForm from "./pages/HotelBookingForm";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/places" element={<Homeque />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/detail" element={<DetailView />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/hotel-booking" element={<HotelBookingForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
