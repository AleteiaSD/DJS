import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import axios from "axios";

import "../../assets/events/events.css";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchCSV = async () => {
      try {
       const csvUrl = "https://raw.githubusercontent.com/AleteiaSD/DJS/master/Events.csv";
        // Ispravan raw URL
        const response = await axios.get(csvUrl);
        const csvData = response.data;
         // Parsiranje CSV podataka
        Papa.parse(csvData, {
          header: true, // Oznaka da CSV ima zaglavlje (kolone)
          skipEmptyLines: true,
          complete: (result) => {
                setEvents(result.data);
          },

        });
      } catch (err) {
        console.error("Error loading CSV:", err);
        setError("Unable to load events. Please try again later.");

        console.log("NEKI ERROR")
      } finally {
        setLoading(false);
      }
    };

    fetchCSV();
    
    console.log(events.ImageURL);
  }, [events]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (

    <div className="events-section">
      <h1>Upcoming Events</h1>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <img
              src={event.ImageURL || '../../../public/photos/Events/E1.jpg'} // Default image fallback
              alt={event.EventName || 'Event Name'}
              className="event-image"
            />
            <div className="event-details">
              <h3>{event.EventName || 'Event Name'}</h3>
              <p>{event.Date || 'Date not available'}</p>
              <p>{event.Description || 'Description not available'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
