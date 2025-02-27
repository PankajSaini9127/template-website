import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useScrollTrigger,
  Slide,
  Avatar,
  Divider,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useTheme } from "@mui/material/styles";

// Hide AppBar on scroll down, show on scroll up
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Navigation = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { label: "Home", href: "#home", icon: <HomeIcon /> },
    { label: "Features", href: "#features", icon: <InfoIcon /> },
    { label: "Services", href: "#services", icon: <DesignServicesIcon /> },
    { label: "Contact", href: "#contact", icon: <ContactMailIcon /> },
  ];

  const getIconForItem = (label) => {
    const item = navItems.find((item) => item.label === label);
    return item ? item.icon : null;
  };

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled
            ? "white"
            : "transparent",
          boxShadow: scrolled ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{ display: "flex", justifyContent: "space-between", py: 1 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {/* <Avatar
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  display: { xs: "none", sm: "flex" },
                  width: 40,
                  height: 40,
                }}
              >
                ERA
              </Avatar> */}
      <svg width="100%" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <text x="5" y="60" font-family="Arial, sans-serif" font-size="30" font-weight="bold" fill="blue">Era</text>
  <text x="60" y="60" font-family="Arial, sans-serif" font-size="30" font-weight="bold" fill="orange">Info</text>
  <text x="120" y="60" font-family="Arial, sans-serif" font-size="30" font-weight="bold" fill="blue">Solution</text>
</svg>

            </Box>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  href={item.href}
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    textTransform: "none",
                    borderRadius: "8px",
                    color: "#3112d5",
                    px: 1,
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: `${theme.palette.primary.light}20`,
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <Button
                variant="contained"
                color="secondary"
                sx={{
                  borderRadius: "8px",
                  textTransform: "none",
                  fontWeight: "600",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 6px 8px rgba(0,0,0,0.15)",
                  },
                }}
              >
                Get Started
              </Button>
            </Box>
          </Toolbar>
        </Container>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              width: 280,
              borderRadius: "0 16px 16px 0",
              px: 2,
            },
          }}
        >
          <Box sx={{ py: 3, display: "flex", justifyContent: "center" }}>
            <Avatar
              sx={{
                bgcolor: theme.palette.secondary.main,
                width: 50,
                height: 50,
              }}
            >
              YC
            </Avatar>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.label}
                component="a"
                href={item.href}
                onClick={toggleDrawer(false)}
                sx={{
                  borderRadius: "8px",
                  mb: 1,
                  "&:hover": {
                    backgroundColor: `${theme.palette.primary.light}20`,
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "1rem",
                    fontWeight: "500",
                  }}
                />
              </ListItem>
            ))}
            <Box sx={{ mt: 2, px: 2 }}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                sx={{
                  borderRadius: "8px",
                  textTransform: "none",
                  py: 1.5,
                  fontWeight: "600",
                }}
              >
                Get Started
              </Button>
            </Box>
          </List>
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
};
