import React, { createContext, useState } from "react";

export const TrafficContext = createContext();

export const TrafficProvider = ({ children }) => {
  const [roads, setRoads] = useState([]);

  return (
    <TrafficContext.Provider value={{ roads, setRoads }}>
      {children}
    </TrafficContext.Provider>
  );
};