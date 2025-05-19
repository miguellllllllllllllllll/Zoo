import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Paper,
  InputAdornment,
  IconButton,
  Fade,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom"; // <--- HINZUGEFÜGT

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // <--- HINZUGEFÜGT

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "zookeeper@zoo.com" && password === "safari123") {
      localStorage.setItem("user", JSON.stringify({ email })); // speichert User
      setError("");
      navigate("/");
    } else {
      setError("Ungültige E-Mail oder Passwort 🐾");
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Fade in={true} timeout={1000}>
          <Paper elevation={3} sx={{ padding: 4, width: "100%" }}>
            <Typography variant="h4" align="center" gutterBottom>
              🐾 Zoo App Login
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleLogin}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                required
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Passwort"
                type={showPassword ? "text" : "password"}
                fullWidth
                required
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Login
              </Button>
            </form>
          </Paper>
        </Fade>
      </Box>
    </Container>
  );
};

export default LoginPage;
