import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import Main_Picture from "../assets/Homepage.jpg";

function Homepage() {
  return (
    <div style={{ height: "100%" }}>
      <header>
        <Navbar />
      </header>
      <main>
        <Box sx={{ position: "relative" }}>
          <div style={{ position: "relative" }}>
            <Box
              component="img"
              sx={{
                width: "100%",
                opacity: "80%",
              }}
              alt="..."
              src={Main_Picture}
            />
            <div className="homepage-text">
              <h1>Herzlich Wilkommen auf der inoffziellen Zoo Zürich Seite</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "calc(4% - 10%) 0 0 0",
            }}
          >
            <Button variant="contained">Tickets bestellen</Button>
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
