import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PetsIcon from "@mui/icons-material/Pets";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PolicyIcon from "@mui/icons-material/Policy";
import BookIcon from "@mui/icons-material/Book";

const navItems = [
  { text: "Home", icon: <HomeIcon />, href: "/" },
  { text: "Tiere", icon: <PetsIcon />, href: "/tiere" },
  { text: "Fütterungszeiten", icon: <AccessTimeIcon />, href: "/zeiten" },
  { text: "Ticket", icon: <ConfirmationNumberIcon />, href: "/ticket" },
  { text: "Datenschutz", icon: <PolicyIcon />, href: "/datenschutz" },
  { text: "Impressum", icon: <BookIcon />, href: "/impressum" },
];

export default function ZooNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem
          button
          component={Link}
          to={item.href}
          key={item.text}
          onClick={() => setDrawerOpen(false)}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <Box sx={{ paddingTop: "64px" }}>
        <AppBar position="absolute" color="success">
          <Toolbar>
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              🦁 ZooApp
            </Typography>
            {!isMobile &&
              navItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  startIcon={item.icon}
                  component={Link}
                  to={item.href}
                >
                  {item.text}
                </Button>
              ))}
            <Button
              color="inherit"
              onClick={isLoggedIn ? handleLogout : handleLoginRedirect}
              sx={{ marginLeft: 2 }}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </Button>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{ "& .MuiDrawer-paper": { width: 250 } }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Outlet />
    </>
  );
}
