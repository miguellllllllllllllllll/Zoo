import "../App.css";
import Footer from "../components/Footer";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import Main_Picture from "../assets/Homepage.jpg";
import { useNavigate } from "react-router-dom"; // <--- HINZUGEFÜGT

function Homepage() {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    navigate("./Ticket");
  }
  return (
    <div style={{ height: "100%" }}>
      <main>
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            sx={{
              width: "100%",
            }}
            alt="..."
            src={Main_Picture}
          />
          <h1 className="main-h1">Herzlich Wilkommen auf unserer Seite</h1>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "calc(4% - 10%) 0 0 0",
            }}
          >
            <Button variant="contained" onClick={handleClick}>
              Tickets bestellen
            </Button>
          </Box>
        </Box>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Homepage;
