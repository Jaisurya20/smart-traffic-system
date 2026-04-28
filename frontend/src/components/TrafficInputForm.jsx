import React, { useState } from "react";
import { getSignalTime } from "../services/trafficService";

export default function TrafficInputForm({ setResult }) {
  const [density, setDensity] = useState("");
  const [waiting, setWaiting] = useState("");

  const handleSubmit = async () => {
    const res = await getSignalTime(density, waiting);
    setResult(res.greenTime);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Traffic Density"
        onChange={(e) => setDensity(e.target.value)}
      /><br /><br />

      <input
        type="number"
        placeholder="Waiting Time"
        onChange={(e) => setWaiting(e.target.value)}
      /><br /><br />

      <button onClick={handleSubmit}>Calculate</button>
    </div>
  );
}