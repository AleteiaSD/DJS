import React, {useEffect} from "react";
import "./assets/global.css"
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ScrollToTop />
      <AllRoutes />
    </>
  );
};

export default App;