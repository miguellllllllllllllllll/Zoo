import "../App.css";
import Navbar from "../components/Navbar";
import { Box, Typography, Card, CardContent, CardActions, Button } from "@mui/material";
import Main_Picture from "../assets/panda.jpg";
import { useNavigate } from "react-router-dom";

function Ticketkauf() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Box
          sx={{
            minHeight: "100vh",
            backgroundImage: `url(${Main_Picture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "2rem",
          }}
        >
          <Button variant="contained" onClick={() => navigate("/")} sx={{ marginBottom: "1rem" }}>
            Zurück
          </Button>

          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "16px",
              padding: "2rem",
              maxWidth: "1000px",
              margin: "0 auto",
              textAlign: "center",
              boxShadow: 3,
            }}
          >
            <Typography variant="h4" gutterBottom>
              Ticketkauf
            </Typography>
            <Typography variant="body1" gutterBottom>
              Wähle dein Ticket aus und sichere dir deinen Platz!
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "2rem",
                marginTop: "2rem",
              }}
            >
              {/* Einzelperson Ticket */}
              <Card sx={{ width: 300 }}>
                <CardContent>
                  <Typography variant="h5">Einzelticket</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Für 1 Person – ideal für Einzelbesucher.
                  </Typography>
                  <Typography variant="h6" sx={{ marginTop: "2.3rem" }}>
                    CHF 15.–
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="contained" color="primary">
                    Kaufen
                  </Button>
                </CardActions>
              </Card>

              {/* Familienticket */}
              <Card sx={{ width: 300 }}>
                <CardContent>
                  <Typography variant="h5">Familienticket</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Für bis zu 5 Personen – perfekt für Familien.
                  </Typography>
                  <Typography variant="h6" sx={{ marginTop: "1rem" }}>
                    CHF 55.–
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="contained" color="primary">
                    Kaufen
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Box>
        </Box>
      </main>
    </>
  );
}

export default Ticketkauf;
