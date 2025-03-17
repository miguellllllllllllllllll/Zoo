import "../App.css";
import Navbar from "../components/navbar";
import { Button } from "@mui/material";

function Homepage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
      <Button variant="contained" sx={{ m: "20rem auto" }}>Tickets bestellen</Button>
      </main>
    </>
  );
}

export default Homepage;
