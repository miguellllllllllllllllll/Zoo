import "./App.css";
import Homepage from "./pages/homepage";
import Ticketkauf from "./pages/ticketkauf";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ticketkauf" element={<Ticketkauf />} />
      </Routes>
    </Router>
  );
}

export default App;
