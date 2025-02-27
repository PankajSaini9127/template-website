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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setDrawerOpen(open);
  };

  const navItems = [
    { label: "Home", href: "#home", icon: <HomeIcon /> },
    { label: "Features", href: "#features", icon: <InfoIcon /> },
    { label: "Services", href: "#services", icon: <DesignServicesIcon /> },
    { label: "Contact", href: "#contact", icon: <ContactMailIcon /> },
  ];

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled
            ? theme.palette.background.paper
            : "transparent",
          boxShadow: scrolled ? theme.shadows[4] : "none",
          transition: "all 0.3s ease-in-out",
          p:0
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{ display: "flex", justifyContent: "space-between", py: 0 }}
          >
            <Box
              component="img"
              src="/img/eralogo.png" // Change this to your actual image path
              alt="Era Info Solution"
              sx={{
                width: { xs: "60px", lg: "100px" }, // Responsive width
                height: "auto", // Maintain aspect ratio
                // mb: 2, // Margin bottom like gutterBottom
              }}
            />

            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer(true)}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    ...theme.typography.button,
                    color: theme.palette.primary.dark,
                    borderRadius: theme.shape.borderRadius,
                    px: 2,
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.light,
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              {/* <Button variant="contained" color="secondary" sx={{ borderRadius: theme.shape.borderRadius }}>
                Get Started
              </Button> */}
            </Box>
          </Toolbar>
        </Container>

        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ py: 3, textAlign: "center" }}>
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
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontWeight: "500" }}
                />
              </ListItem>
            ))}
            <Box sx={{ mt: 2, px: 2 }}>
              <Button fullWidth variant="contained" color="secondary">
                Get Started
              </Button>
            </Box>
          </List>
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
};
