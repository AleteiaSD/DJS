import React from "react";
import { Link } from "react-router-dom";
import "../assets/notfound/notfound.css";

import "../../src/assets/global.css";
import { useTranslation } from 'react-i18next';
const NotFound = () => {
  
    const { t } = useTranslation();
  return (
    <>
      <section className="error-page-wrapper">
        <div className="container">
          <div className="notfound-row justify-content-center full-screen align-items-center">
            <div className="col-lg-8 text-center">
              <div className="inner">
                <h1 className="display-3  m-15px-b">
                  404 - {t('notfound.pagenotfound')}
                </h1>
                <p className="h4">                
                {t('notfound.whoops')}
                </p>
                <div className="btn-bar mt-4">
                  <Link className="px-btn px-btn-white" to="/">
                    {t('notfound.backtohome')}
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
