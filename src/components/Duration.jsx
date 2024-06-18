import React, { useState, useEffect } from "react";

const Duration = () => {
  const [toggleScale, setToggleScale] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggleScale((prevState) => !prevState);
      setSecondsElapsed((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className={`text-sm text-rose-300 transform ${
        toggleScale ? "scale-120 text-rose-500" : "scale-100"
      }`}
    >
      {secondsElapsed}s
    </p>
  );
};

export default Duration;
