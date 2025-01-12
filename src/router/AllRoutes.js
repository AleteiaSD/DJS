import React from "react";
import Home2 from '../components/home2/Home2';
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/scrolltotop/ScrollTopBehaviour";
import HeaderComponent2 from "../components/headercomponent2/HeaderComponent2";
import FloatingPhoneIcon from "../components/floatingphoneicon/FloatingPhoneIcon";
import AboutUs2 from "../components/aboutus2/AboutAnimation2";
import EventsPage from "../components/events/EventsPage";
import GalleryTakiKibo from "../components/gallery2/GalleryTakiKibo";

import ContactSection2 from "../components/contact2/ContactSection2";
import Footer from "../components/footer/FooterAnimation";


const AllRoutes = () => {
  return (
    <>
    
      <ScrollTopBehaviour />
      
    
      <HeaderComponent2/>
      <Routes>
        <Route path="/" element={<Home2/>} />
        <Route path="*" element={<NotFound/>} />        
        <Route path="aboutus" element={<AboutUs2/>} /> 
        <Route path="events" element={<EventsPage/>} /> 
              
        <Route path="gallery" element={<GalleryTakiKibo/>} /> 
        <Route path="contact" element={<ContactSection2/>} />
      </Routes>
      <Footer/>
     
      <FloatingPhoneIcon/>
      
    </>
  );
};

export default AllRoutes;
