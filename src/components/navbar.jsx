import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, paddingTop: "64px"}}>
      <AppBar position="absolute">
        <Toolbar>
          {/* Hamburger Menu für Mobile */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" }, mr: 2 }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            🦁 ZooApp
          </Typography>

          {/* Navigation Links für größere Bildschirme */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit" href="/">
              Home
            </Button>
            <Button color="inherit" href="/animals">
              Animals
            </Button>
            <Button color="inherit" href="/tickets">
              Tickets
            </Button>
            <Button color="inherit" href="/contact">
              Contact
            </Button>
          </Box>

          {/* Login Button */}
          <Button color="inherit" href="/login">
            Login
          </Button>

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuProps={{
              elevation: 1, // Reduziert den Schatten
              PaperProps: {
                sx: {
                  borderRadius: 2, // Abgerundete Ecken
                  minWidth: 200, // Konsistente Breite
                },
              },
            }}
          >
            <MenuItem onClick={handleMenuClose} component="a" href="/">
              Home
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="/animals">
              Animals
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="/tickets">
              Tickets
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="/contact">
              Contact
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
