import React, { useState } from 'react';

function RecipeTimer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setTime(0);
    setIsActive(false);
  }

  function setTimer(event) {
    setTime(parseInt(event.target.value, 10));
  }

  React.useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (!isActive || time === 0) {
      clearInterval(interval);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div>
        <div>
            <h5>Countdown timer for recipes</h5>
            <p>Set the seconds to start countdown</p>
        </div>
      <div><h1>{time} seconds</h1></div>
      <input
        type="number"
        value={time}
        onChange={setTimer}
        className="form-control"
      />
      <button onClick={toggle} className="btn btn-primary">
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={reset} className="btn btn-primary" style={{margin: "1%"}}>Reset</button>
    </div>
  );
}

export default RecipeTimer;
