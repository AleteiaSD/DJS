import React from "react";
import Home from '../components/home/Home'
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/scrolltotop/ScrollTopBehaviour";
import HeaderComponent from "../components/headercomponent/HeaderComponent";
import FloatingPhoneIcon from "../components/floatingphoneicon/FloatingPhoneIcon";
import AboutUs from "../components/aboutus/AboutAnimation";
import EventsPage from "../components/events/EventsPage";
import InstagramGallery from "../components/gallery/InstagramGallery";

import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/footer/FooterAnimation";

const AllRoutes = () => {
  return (
    <>
    
      <ScrollTopBehaviour />
      
      <HeaderComponent/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />        
        <Route path="aboutus" element={<AboutUs/>} /> 
        <Route path="events" element={<EventsPage/>} /> 
              
        <Route path="gallery" element={<InstagramGallery/>} /> 
        <Route path="contact" element={<ContactSection/>} />
      </Routes>
      <Footer/>
     
      <FloatingPhoneIcon/>
      
    </>
  );
};

export default AllRoutes;
