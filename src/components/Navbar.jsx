import { Outlet, Link } from "react-router-dom";
import React from "react";
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
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PetsIcon from "@mui/icons-material/Pets";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import RuleIcon from "@mui/icons-material/Rule";

const navItems = [
  { text: "Home", icon: <HomeIcon />, href: "/" },
  { text: "Tiere", icon: <PetsIcon />, href: "/tiere" },
  { text: "Fütterungszeiten", icon: <AccessTimeIcon />, href: "/zeiten" },
  { text: "Tickets", icon: <ConfirmationNumberIcon />, href: "/tickets" },
  { text: "Datenschutz", icon: <RuleIcon />, href: "/datenschutz" },
];

export default function ZooNavbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem button component="a" href={item.href} key={item.text}>
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
                  href={item.href}
                >
                  {item.text}
                </Button>
              ))}
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
