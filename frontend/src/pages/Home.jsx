import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TrafficInputForm from "../components/TrafficInputForm";
import SignalDisplay from "../components/SignalDisplay";
import TrafficLight from "../components/TrafficLight";

export default function Home() {
  const [result, setResult] = useState(0);

  return (
    <div>
      <Navbar />
      <h2>Traffic Simulation</h2>

      <TrafficInputForm setResult={setResult} />
      <SignalDisplay result={result} />
      <TrafficLight result={result} />
    </div>
  );
}