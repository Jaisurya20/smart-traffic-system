import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const TrafficChart = ({ roads = [] }) => {
  return (
    <BarChart width={400} height={300} data={roads}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="density" fill="cyan" />
    </BarChart>
  );
};

export default TrafficChart;