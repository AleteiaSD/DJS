import React from "react";
import { Link } from "react-router-dom";
import "../assets/notfound/notfound.css";
const NotFound = () => {
  return (
    <>
      <section className="error-page-wrapper">
        <div className="container">
          <div className="notfound-row justify-content-center full-screen align-items-center">
            <div className="col-lg-8 text-center">
              <div className="inner">
                <h1 className="display-3  m-15px-b">
                  404 - Page Not Found..
                </h1>
                <p className="h4">
                  Whoops, it looks like the page you request wasn't found.
                </p>
                <div className="btn-bar mt-4">
                  <Link className="px-btn px-btn-white" to="/">
                    BACK TO HOME
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      


    </>
  );
};

export default NotFound;
