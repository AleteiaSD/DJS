import React from "react";
import Home from '../components/home/Home'
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/scrolltotop/ScrollTopBehaviour";
import AboutUs from "../components/aboutus/AboutAnimation";
import ContactSection from "../components/contact/ContactSection";
import HeaderComponent from "../components/headercomponent/HeaderComponent";
import FloatingPhoneIcon from "../components/floatingphoneicon/FloatingPhoneIcon";
import InstagramGallery from "../components/gallery/InstagramGallery";
const AllRoutes = () => {
  return (
    <>
    
      <ScrollTopBehaviour />
      
      <HeaderComponent/>
      <FloatingPhoneIcon/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="aboutus" element={<AboutUs/>} />             
        <Route path="gallery" element={<InstagramGallery/>} />   
        <Route path="contact" element={<ContactSection/>} />
      </Routes>

     
      
    </>
  );
};

export default AllRoutes;
