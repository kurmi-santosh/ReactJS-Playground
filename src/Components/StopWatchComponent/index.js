import { useEffect, useState } from "react";
import { Timer } from "./Timer";

const StopWatchComponent = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  return (
    <>
      <Timer time={time} />
      <br />
      <div>
        <button onClick={handleReset} style={{ marginRight: "5px" }}>
          Reset
        </button>
        {isActive ? (
          <button onClick={handlePauseResume} style={{ marginLeft: "5px" }}>
            {isPaused ? <span>Resume</span> : <span>Pause</span>}
          </button>
        ) : (
          <button onClick={handleStart}>Start</button>
        )}
      </div>
    </>
  );
};

export default StopWatchComponent;
