import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import axios from "axios";
import Lightbox from "react-image-lightbox"; // Import za Lightbox
import "react-image-lightbox/style.css"; // Stilovi za Lightbox
import { useTranslation } from "react-i18next";
import { format } from "date-fns"; // Import za rad sa datumima
import { sr, enUS } from "date-fns/locale"; // Lokacije za srpski i engleski jezik
import "../../assets/events/events.css";

const EventsPage = () => {
  const { t, i18n } = useTranslation(); // useTranslation za prevođenje
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Lightbox stanje
  const [photoIndex, setPhotoIndex] = useState(0); // Trenutni događaj u Lightbox-u

  // Funkcija za formatiranje datuma na osnovu jezika
  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";

    // Konvertujte datum u ISO format (yyyy-MM-dd)
    const [month, day, year] = dateString.split("/");
    const formattedDate = `${year}-${month}-${day}`; // Convert to yyyy-MM-dd

    const parsedDate = new Date(formattedDate);

    if (isNaN(parsedDate)) {
      console.error("Invalid date format:", dateString);
      return "Invalid Date"; // Ako datum nije validan, vratite poruku o grešci
    }

    const currentLocale = i18n.language === "sr" ? sr : enUS; // Izbor lokalizacije

    // Formatirajte datum u odgovarajući format
    return format(
      parsedDate,
      i18n.language === "sr" ? "dd.MM.yyyy" : "MM/dd/yyyy",
      { locale: currentLocale }
    );
  };

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const csvUrl = `${process.env.PUBLIC_URL}/Events.csv`;
        const response = await axios.get(csvUrl);
        const csvData = response.data;
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => setEvents(result.data),
        });
      } catch (err) {
        console.error("Error loading CSV:", err);
        setError("Unable to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCSV();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Generišite listu slika za Lightbox
  const eventImages = events.map(
    (event) =>
      process.env.PUBLIC_URL + event.ImageURL ||
      "../../../public/photos/Events/E1.jpg"
  );

  // Prevod naziva i opisa na osnovu izabranog jezika
  const getEventName = (event) => {
    return i18n.language === "sr" ? event.EventName_sr : event.EventName_en;
  };

  const getEventDescription = (event) => {
    return i18n.language === "sr" ? event.Description_sr : event.Description_en;
  };

  return (
    <div className="events-section">
      <h1> {t("events.header")} </h1>
      <div className="events-list">
        {events.map((event, index) => (
          <div
            key={index}
            className="event-item"
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          >
            <img
              src={
                process.env.PUBLIC_URL + event.ImageURL ||
                "/photos/Events/default.jpg"
              }
              alt={getEventName(event)}
              className="event-image"
            />
            <div className="event-details">
              <h3>{getEventName(event)}</h3>
              <p> <strong> {t("events.date")}</strong> {formatDate(event.Date) || "Date not available"}</p>
              <p> <strong> {t("events.description")} </strong>{getEventDescription(event) || "Description not available"}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox za uvećane slike */}
      {isOpen && (
        <Lightbox
          mainSrc={eventImages[photoIndex]}
          nextSrc={eventImages[(photoIndex + 1) % eventImages.length]}
          prevSrc={eventImages[(photoIndex + eventImages.length - 1) % eventImages.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + eventImages.length - 1) % eventImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % eventImages.length)
          }
          imageCaption={
            <div className="lightbox-details">
              <h2>{getEventName(events[photoIndex])}</h2>
              <p>
                <strong>{t("events.date")}</strong>{" "}
                {formatDate(events[photoIndex]?.Date)}
              </p>
              <p><strong>{t("events.description")}</strong>
               {getEventDescription(events[photoIndex])}</p>
            </div>
          }
        />
      )}
    </div>
  );
};

export default EventsPage;
