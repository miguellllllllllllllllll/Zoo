import "../App.css";
import Navbar from "../components/navbar";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

function Homepage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained">Tickets bestellen</Button>
        </Box>
      </main>
    </>
  );
}

export default Homepage;
