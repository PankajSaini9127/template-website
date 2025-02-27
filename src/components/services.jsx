import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  ListItemIcon,
  useTheme
} from "@mui/material";
import {
  Code as CodeIcon,
  PhoneIphone as MobileIcon,
  Public as WebIcon,
  Cloud as CloudIcon,
  Settings as CogsIcon,
  Security as ShieldIcon
} from "@mui/icons-material";

const iconMapping = {
  "fa fa-code": <CodeIcon fontSize="large" color="primary" />, 
  "fa fa-mobile": <MobileIcon fontSize="large" color="primary" />, 
  "fa fa-globe": <WebIcon fontSize="large" color="primary" />, 
  "fa fa-cloud": <CloudIcon fontSize="large" color="primary" />, 
  "fa fa-cogs": <CogsIcon fontSize="large" color="primary" />, 
  "fa fa-shield": <ShieldIcon fontSize="large" color="primary" />
};

export const Services = () => {
  const theme = useTheme();

  const servicesData = [
    {
      icon: "fa fa-code",
      name: "Custom Software Development",
      text: "We design and develop tailored software solutions that align with your business needs, ensuring scalability, security, and performance."
    },
    {
      icon: "fa fa-mobile",
      name: "Mobile App Development",
      text: "Our team specializes in building high-performance iOS and Android applications with seamless user experiences and modern features."
    },
    {
      icon: "fa fa-globe",
      name: "Web Development",
      text: "From responsive websites to complex web applications, we create powerful and intuitive web solutions using the latest technologies."
    },
    {
      icon: "fa fa-cloud",
      name: "Cloud Solutions",
      text: "We help businesses leverage cloud computing with scalable, cost-effective, and secure cloud-based applications and infrastructure."
    },
    {
      icon: "fa fa-cogs",
      name: "API & System Integration",
      text: "We develop and integrate APIs to ensure seamless connectivity between different systems, enhancing business efficiency and automation."
    },
    {
      icon: "fa fa-shield",
      name: "Cybersecurity & Compliance",
      text: "Our team ensures your digital assets are protected with robust security measures and compliance with industry standards."
    }
  ];

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: theme.palette.grey[50]
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 3,
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -10,
              left: "50%",
              transform: "translateX(-50%)",
              width: 80,
              height: 4,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2
            }
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", maxWidth: 800, mx: "auto", mb: 6 }}
        >
          We provide cutting-edge development solutions, from custom software
          and mobile apps to web development and cloud integration. Our
          expertise ensures scalable, secure, and high-performance
          applications tailored to your business needs.
        </Typography>

        <Grid container spacing={4}>
          {servicesData.map((d, i) => (
            <Grid item key={`${d.name}-${i}`} xs={12} sm={6} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
                    transform: "translateY(-5px)"
                  }
                }}
              >
                <ListItemIcon sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  {iconMapping[d.icon]}
                </ListItemIcon>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  {d.name}
                </Typography>
                <Typography variant="body2" >
                  {d.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
