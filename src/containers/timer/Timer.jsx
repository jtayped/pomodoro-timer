import "./timer.css";
import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const restTime = props.restTime;
  const workTime = props.workTime;
  const pomodorosTillLongRest = props.pomodorosTillLongRest;

  const [time, setTime] = useState(workTime);
  const [isActive, setIsActive] = useState(false);
  const [isRest, setIsRest] = useState(false);
  const [counter, setCounter] = useState(0);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setTime(workTime);
    setIsActive(false);
    setIsRest(false);
    setCounter(0);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (time > 0) {
          setTime((time) => time - 1);
        } else {
          if (isRest) {
            setTime(workTime);
          } else {
            setCounter(counter + 1);
            if (counter >= pomodorosTillLongRest - 1) {
              setTime(restTime * 3);
              setCounter(0);
            } else {
              setTime(restTime);
            }
          }
          setIsRest(!isRest);
          console.log(counter);
        }
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [
    isActive,
    time,
    counter,
    restTime,
    workTime,
    pomodorosTillLongRest,
    isRest,
  ]);

  return (
    <div
      className="timer"
      style={{ backgroundColor: isRest ? "#89CFF0" : "#DBA39A" }}
    >
      <h3>
        {Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}
      </h3>
      <div className="timer-options">
        <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
        <p>{counter+1}</p>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
