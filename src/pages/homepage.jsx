import "../App.css";
import Navbar from "../components/Navbar";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import Main_Picture from "../assets/Homepage.jpg";

function Homepage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Box
          component="img"
          sx={{
            width:"100%"
          }}
          alt="..."
          src={Main_Picture}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "calc(20vh - 10vh) 0 0 0",
          }}
        >
          <Button variant="contained">Tickets bestellen</Button>
        </Box>
      </main>
    </>
  );
}

export default Homepage;
