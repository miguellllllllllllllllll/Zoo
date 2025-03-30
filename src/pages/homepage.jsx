import "../App.css";
import Navbar from "../components/Navbar";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import Main_Picture from "../assets/Homepage_Picture.jpg";

function Homepage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <img src="{$Main_Picture}" alt="" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "calc(100vh - 10vh) 0 0 0",
          }}
        >
          <Button variant="contained">Tickets bestellen</Button>
        </Box>
      </main>
    </>
  );
}

export default Homepage;
