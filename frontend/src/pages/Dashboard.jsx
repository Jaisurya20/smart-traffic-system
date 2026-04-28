import React, { useContext } from "react";
import { TrafficContext } from "../context/TrafficContext";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Dashboard = () => {
  const { roads } = useContext(TrafficContext);

  const locations = [
    [12.9716, 79.1588],
    [12.9716, 79.1605],
    [12.9700, 79.1588],
    [12.9716, 79.1570]
  ];

  return (
    <div style={{ height: "100vh" }}>
      <h2 style={{ textAlign: "center" }}>🗺️ Traffic Map</h2>

      <MapContainer center={locations[0]} zoom={16} style={{ height: "90%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {locations.map((pos, i) => {
          const d = roads[i]?.density || 0;

          return (
            <React.Fragment key={i}>
              <Marker position={pos}>
                <Popup>
                  {["North","East","South","West"][i]} <br />
                  Density: {Math.floor(d)}
                </Popup>
              </Marker>

              <Circle
                center={pos}
                radius={Math.max(50, d * 2)}
                pathOptions={{
                  color: d > 70 ? "#ff0000" : d > 40 ? "#ffaa00" : "#00ff00",
                  fillOpacity: 0.3
                }}
              />
            </React.Fragment>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Dashboard;