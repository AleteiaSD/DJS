import React from "react";
import "../../assets/aboutus2/aboutus2.css";
import { FaCalendarAlt, FaMusic, FaSmile } from "react-icons/fa";

const AboutUs2 = () => {
  return (
    <div className="about-us2-container">
      <header className="about-us2-header">
        <h1>O Nama</h1>
        <p>Upoznajte DJ Taki & Kibo</p>
      </header>

      <section className="dj-section">
        <article className="dj">
          <img 
            src="/photos/home/taki-bez-kontrole.png" 
            alt="DJ Taki - specijalista za hitove iz 2000-ih" 
            className="dj-image" 
          />
          <h2>DJ Taki</h2>
          <p>Specijalista za narodnu i zabavnu muziku.</p>
        </article>

        <article className="dj">
          <img 
            src="/photos/home/kibo-bez-kontrole.png" 
            alt="DJ Kibo - stručnjak za zabavu" 
            className="dj-image" 
          />
          <h2>DJ Kibo</h2>
          <p>Kreira nezaboravne žurke svojim miksovima.</p>
        </article>
      </section>

      <section className="description">
        <p>
          DJ Taki & Kibo donose najbolje hitove iz 2000-ih, narodnu i zabavnu srpsku muziku.
          Njihova misija je da svaka žurka bude nezaboravna, a gosti zadovoljni i nasmejani.
        </p>
      </section>

      <section className="statistics">
        <div className="stat">
          <FaCalendarAlt className="stat-icon" aria-label="Iskustvo" />
          <p>10 godina iskustva</p>
        </div>
        <div className="stat">
          <FaMusic className="stat-icon" aria-label="Žurke" />
          <p>200+ odrađenih žurki</p>
        </div>
        <div className="stat">
          <FaSmile className="stat-icon" aria-label="Zadovoljni gosti" />
          <p>1000+ zadovoljnih gostiju</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs2;
