import React from "react";
import { Box, Container, Typography, Grid, Paper, useTheme, Button, Divider } from "@mui/material";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DevicesIcon from "@mui/icons-material/Devices";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SpeedIcon from "@mui/icons-material/Speed";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Features = (props) => {
  const theme = useTheme();

  // Default sample data if none is provided
  const sampleData = [
    {
      icon: "fa fa-desktop",
      title: "Responsive Design",
      text: "Our solutions adapt perfectly to all devices ensuring the best user experience on desktop, tablet, and mobile."
    },
    {
      icon: "fa fa-paint-brush",
      title: "Modern Interface",
      text: "Clean, intuitive interfaces designed with the latest UX principles to enhance user engagement and satisfaction."
    },
    {
      icon: "fa fa-rocket",
      title: "High Performance",
      text: "Optimized for speed and efficiency, our products deliver lightning-fast performance that keeps your users engaged."
    },
    {
      icon: "fa fa-headphones",
      title: "24/7 Support",
      text: "Our dedicated support team is always ready to help you with any questions or issues you might encounter."
    }
  ];

  // Map font awesome icon classes to Material UI icons
  const getIcon = (iconClass) => {
    const iconMap = {
      "fa fa-desktop": <DevicesIcon sx={{ fontSize: 40 }} />,
      "fa fa-paint-brush": <DesignServicesIcon sx={{ fontSize: 40 }} />,
      "fa fa-rocket": <SpeedIcon sx={{ fontSize: 40 }} />,
      "fa fa-headphones": <SupportAgentIcon sx={{ fontSize: 40 }} />
    };
    
    // Return the mapped icon or a default one
    return iconMap[iconClass] || <DesignServicesIcon sx={{ fontSize: 40 }} />;
  };
  
  // Data to use (props data or sample data)
  const featuresData = props.data || sampleData;
  
  return (
    <Box
      id="features"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: "white",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "400px",
          background: `linear-gradient(135deg, ${theme.palette.primary.light}15 0%, ${theme.palette.secondary.light}15 100%)`,
          zIndex: 0,
          borderBottomLeftRadius: "50% 10%",
          borderBottomRightRadius: "50% 10%",
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box 
          sx={{ 
            textAlign: "center", 
            mb: { xs: 8, md: 10 },
            maxWidth: "800px",
            mx: "auto"
          }}
        >
          <Typography
            variant="overline"
            component="p"
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: 2,
              color: theme.palette.secondary.main,
              mb: 1,
              textTransform: "uppercase"
            }}
          >
            Why Choose Us
          </Typography>
          
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 800,
              mb: 3,
              lineHeight: 1.2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Powerful Features for Modern Solutions
          </Typography>
          
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "1.1rem",
              color: theme.palette.text.secondary,
              mb: 4,
              lineHeight: 1.6
            }}
          >
            Our platform combines cutting-edge technology with user-friendly design to provide you with the tools you need to succeed in today's competitive landscape.
          </Typography>
          
          <Divider sx={{ width: "60px", mx: "auto", borderWidth: "2px", borderColor: theme.palette.secondary.main, mb: 8 }} />
        </Box>
        
        <Grid container spacing={4}>
          {featuresData.map((d, i) => (
            <Grid item xs={12} sm={6} md={3} key={`${d.title}-${i}`}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start", // Left-aligned for modern look
                  textAlign: "left",
                  borderRadius: 4,
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: i % 2 === 0 ? "white" : `${theme.palette.primary.light}05`,
                  border: "1px solid",
                  borderColor: i % 2 === 0 ? theme.palette.grey[200] : theme.palette.primary.light,
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
                    "& .icon-wrapper": {
                      transform: "scale(1.1)",
                      color: theme.palette.secondary.main
                    },
                    "& .learn-more": {
                      opacity: 1,
                      transform: "translateX(0)"
                    }
                  }
                }}
              >
                <Box
                  className="icon-wrapper"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: theme.palette.primary.main,
                    mb: 3,
                    transition: "all 0.4s ease"
                  }}
                >
                  {getIcon(d.icon)}
                </Box>
                
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    transition: "color 0.3s ease",
                  }}
                >
                  {d.title}
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                    mb: 3
                  }}
                >
                  {d.text}
                </Typography>
                
                <Box sx={{ mt: "auto" }}>
                  <Button
                    className="learn-more"
                    variant="text"
                    color="secondary"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                      p: 0,
                      opacity: 0.8,
                      transform: "translateX(-5px)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "transparent"
                      }
                    }}
                  >
                    Learn more
                  </Button>
                </Box>
                
                {/* Decorative element */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 15,
                    right: 15,
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: i % 2 === 0 ? `${theme.palette.primary.light}10` : `${theme.palette.secondary.light}15`,
                    zIndex: 0
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "1rem",
              boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
              }
            }}
          >
            Explore All Features
          </Button>
        </Box>
      </Container>
    </Box>
  );
};