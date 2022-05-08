import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Timer() {
  let time = new Date().toLocaleTimeString();
  const [seconds, SetSeconds] = useState(0);
  const [minutes, SetMinutes] = useState(0);

  var timer;
  useEffect(() => {
    setInterval(() => {
      SetSeconds(seconds + 1);

      if (seconds == 59) {
        SetMinutes(minutes + 1);
      }
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="timer">
      <div>
        <h1>Timer</h1>
        <h1>{time}</h1>
        <h1>
          {minutes <= 10 ? "0" + minutes : minutes}:
          {seconds <= 10 ? "0" + seconds : seconds}
        </h1>
        <button
          className="start"
          onClick={() => {
            SetMinutes(0) && SetSeconds(0);
          }}
        >
          Start
        </button>
        <button
          className="stop"
          onClick={() => {
            clearInterval(timer);
          }}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default Timer;
