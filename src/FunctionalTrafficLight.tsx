import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const [light, setLight] = useState<string>('red');

  const nextLight = () => {
    const lightColors: string[] = ['red', 'green', 'yellow'];
    const currentLight = lightColors.indexOf(light);
    const nextLight = (currentLight + 1) % lightColors.length;
    setLight(lightColors[nextLight])
  };
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div className={`circle ${light === 'red' ? 'red' : 'black'}`}></div>
        <div className={`circle ${light === 'yellow' ? 'yellow' : 'black'}`}></div>
        <div className={`circle ${light === 'green' ? 'green' : 'black'}`}></div>
      </div>
      <button className="next-state-button" onClick={nextLight}>Next State</button>
    </div>
  );
};



