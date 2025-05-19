import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "/src/pages/LoginPage";
import Homepage from "/src/pages/Homepage";
import "./App.css";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import Navbar from "./components/Navbar";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route index element={<Homepage />} />
          <Route path="datenschutz" element={<Datenschutz />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
