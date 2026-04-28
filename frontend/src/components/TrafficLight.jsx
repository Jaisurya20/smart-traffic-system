import React from "react";

export default function TrafficLight({ result }) {
  return (
    <div>
      <div style={{ background: "black", padding: "10px", width: "60px" }}>
        <div style={{ background: "red", height: "40px", margin: "5px" }}></div>
        <div style={{ background: "yellow", height: "40px", margin: "5px" }}></div>
        <div style={{ background: result ? "green" : "grey", height: "40px", margin: "5px" }}></div>
      </div>
    </div>
  );
}