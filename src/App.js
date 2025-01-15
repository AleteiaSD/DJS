import React, { useEffect, useState } from "react";
import "./assets/global.css";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/loader/Loader";

const App = () => {
  const [loading, setLoading] = useState(true); // State za upravljanje Loader-om

  useEffect(() => {
    // Inicijalizacija AOS biblioteke
    AOS.init();

    // Postavljanje tajmera za isključivanje Loader-a nakon 4 sekunde
    const timer = setTimeout(() => {
      setLoading(false); // Isključuje Loader
    }, 6000);

    // Čisti tajmer pri demontiranju komponente
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Prikazuje Loader dok je loading true
      ) : (
        <>
          <ScrollToTop />
          <AllRoutes />
        </>
      )}
    </>
  );
};

export default App;
