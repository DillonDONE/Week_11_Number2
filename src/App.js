import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [time, setTime] = useState(new Date());
  const [showLocalTime, setShowLocalTime] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (showLocalTime) {
        setTime(new Date());
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [showLocalTime]);

  const handleGetTime = () => {
    setShowLocalTime((prevState) => !prevState);
  };

  return (
    <div className="container">
      <h1>{showLocalTime ? time.toLocaleTimeString() : "SHOW THE TIME"}</h1>
      <button className="button" onClick={handleGetTime}>
        {showLocalTime ? "HIDE TIME" : "GET TIME"}
      </button>
    </div>
  );
}

export default App;
