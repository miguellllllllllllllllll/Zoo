import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Datenschutz from "./pages/Datenschutz";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";
import Impressum from "./pages/Impressum";
import Navbar from "./components/Navbar";
import Ticket from "./pages/Ticket";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="ticket" element={<Ticket />} />
            <Route path="datenschutz" element={<Datenschutz />} />
            <Route path="impressum" element={<Impressum />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
