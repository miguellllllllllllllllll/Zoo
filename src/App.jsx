import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "/src/pages/LoginPage";
import Homepage from "/src/pages/Homepage"; // deine Komponente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
