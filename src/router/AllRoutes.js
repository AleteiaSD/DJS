import React from "react";
import Home from '../components/home/Home';
import Home2 from '../components/home2/Home2';
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/scrolltotop/ScrollTopBehaviour";
import HeaderComponent2 from "../components/headercomponent2/HeaderComponent2";

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
      
    
      <HeaderComponent2/>
      <Routes>
        <Route path="/" element={<Home2/>} />
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
