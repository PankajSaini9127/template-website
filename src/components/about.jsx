import React from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  useTheme, 
  Paper,
  Button
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const About = (props) => {
  const theme = useTheme();
  
  // Sample data in case props data is not provided
  const sampleData = {
    paragraph: "We are a passionate team of professionals dedicated to delivering cutting-edge solutions that empower businesses to reach their full potential. With years of industry experience, we've developed a deep understanding of the challenges our clients face and how to overcome them effectively.",
    Why: [
      "Innovative Solutions",
      "Expert Team",
      "Customized Approach",
      "Fast Implementation"
    ],
    Why2: [
      "24/7 Support",
      "Affordable Pricing",
      "High-Quality Results",
      "Client Satisfaction"
    ]
  };

  // Use props data or fallback to sample data
  const aboutData = props.data || sampleData;

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 10, md: 8 },
        position: "relative",
        backgroundColor: theme.palette.grey[50],
        overflow: "hidden"
      }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          backgroundColor: `${theme.palette.primary.main}10`,
          zIndex: 0
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -50,
          left: -50,
          width: 200,
          height: 200,
          borderRadius: "50%",
          backgroundColor: `${theme.palette.secondary.main}10`,
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -20,
                  left: -20,
                  width: "100%",
                  height: "100%",
                  backgroundColor: theme.palette.secondary.main,
                  zIndex: -1,
                  borderRadius: 4,
                  opacity: 0.1,
                  display: { xs: "none", sm: "block" }
                }
              }}
            >
              <Paper
                elevation={5}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  transform: "rotate(-2deg)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "rotate(0deg)"
                  }
                }}
              >
                <Box
                  component="img"
                  src="/img/about.jpg"
                  alt="About Us"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block"
                  }}
                />
              </Paper>
            </Box>
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 600 }}>
              <Typography
                variant="overline"
                component="p"
                sx={{
                  fontSize: { xs: "1rem", lg:"1.5rem" },
                  fontWeight: 600,
                  letterSpacing: 2,
                  color: theme.palette.primary.main,
                  mb: 1
                }}
              >
                Our Story
              </Typography>

              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  fontWeight: 700,
                  mb: 3,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -10,
                    left: 0,
                    width: 60,
                    height: 3,
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: 2
                  }
                }}
              >
                About Us
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", lg:"1.5rem" },
                  color: theme.palette.text.secondary,
                  mb: 4,
                  lineHeight: 1.7
                }}
              >
                {aboutData.paragraph}
              </Typography>

              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Why Choose Us?
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <List>
                    {aboutData.Why.map((item, index) => (
                      <ListItem 
                        key={`why-${index}`} 
                        disableGutters 
                        sx={{ py: 0.50 }}
                      >
                        <ListItemIcon sx={{ minWidth: 25 }}>
                          <CheckCircleIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            fontWeight: 500,
                            fontSize: { xs: "1rem", lg:"1.5rem" }, 
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <List>
                    {aboutData.Why2.map((item, index) => (
                      <ListItem 
                        key={`why2-${index}`} 
                        disableGutters 
                        sx={{ py: 0.50 }}
                      >
                        <ListItemIcon sx={{ minWidth: 25 }}>
                          <CheckCircleIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            fontWeight: 500,
                            fontSize: { xs: "1rem", lg:"1.5rem" }, 
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>

              <Box sx={{ mt: 4 }}>
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
                  Learn More About Us
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};