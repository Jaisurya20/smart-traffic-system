import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Simulation from "./pages/Simulation";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <Link to="/">Simulation</Link> | <Link to="/dashboard">Dashboard</Link>
      </div>

      <Routes>
        <Route path="/" element={<Simulation />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;