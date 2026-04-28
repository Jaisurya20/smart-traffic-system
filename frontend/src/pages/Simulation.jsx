import React, { useEffect, useRef, useState } from "react";
import "./Simulation.css";

const directions = ["North", "East", "South", "West"];

const Simulation = () => {
  const [roads, setRoads] = useState([]);
  const [activeRoad, setActiveRoad] = useState(0);
  const [light, setLight] = useState("red");
  const [timer, setTimer] = useState(0);

  const runningRef = useRef(false);

  // 🚗 Generate traffic
  const generateTraffic = () => {
    return directions.map((dir) => ({
      name: dir,
      density: Math.floor(Math.random() * 100),
      waiting: Math.floor(Math.random() * 60)
    }));
  };

  // 🧠 Select road
  const getNextRoad = (data) => {
    let maxIndex = 0;
    data.forEach((r, i) => {
      if (r.density > data[maxIndex].density) {
        maxIndex = i;
      }
    });
    return maxIndex;
  };

  // 🔁 Simulation loop (stable)
  const runSimulation = () => {
    if (runningRef.current) return;
    runningRef.current = true;

    const cycle = () => {
      const newTraffic = generateTraffic();
      setRoads(newTraffic);

      const next = getNextRoad(newTraffic);
      setActiveRoad(next);

      // 🚦 Yellow
      setLight("yellow");
      setTimer(2);

      setTimeout(() => {
        const road = newTraffic[next];
        const greenTime = Math.max(5, Math.floor(road.density / 2));

        setLight("green");
        setTimer(greenTime);

        let t = greenTime;

        const interval = setInterval(() => {
          t--;
          setTimer(t);

          if (t <= 0) {
            clearInterval(interval);
            cycle();
          }
        }, 1000);

      }, 2000);
    };

    cycle();
  };

  useEffect(() => {
    runSimulation();
  }, []);

  return (
    <div className="container">
      <h1>🚦 Smart Traffic Intersection</h1>

      <h3>⏳ Timer: {timer}s</h3>
      <h3 className="active">
        🚗 Active: {roads[activeRoad]?.name}
      </h3>

      <div className="intersection">

        {/* ROADS */}
        {roads.map((road, index) => (
          <div key={index} className={`road ${road.name.toLowerCase()}`}>

            <div className="stop-line"></div>

            {/* 🚗 Cars */}
            {Array.from({
              length: Math.max(2, Math.floor(road.density / 15))
            }).map((_, i) => (
              <div
                key={i}
                className={`car ${road.name.toLowerCase()} ${
                  activeRoad === index && light === "green"
                    ? "move"
                    : ""
                }`}
                style={{ "--i": i }}
              >
                🚗
              </div>
            ))}
          </div>
        ))}

        {/* 🚦 SIGNALS */}
        {directions.map((dir, i) => (
          <div key={dir} className={`signal-pole pole-${dir.toLowerCase()}`}>
            <div className="signal-box">
              <div className={`light red ${activeRoad !== i ? "on" : ""}`} />
              <div className={`light yellow ${activeRoad === i && light === "yellow" ? "on" : ""}`} />
              <div className={`light green ${activeRoad === i && light === "green" ? "on" : ""}`} />
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Simulation;