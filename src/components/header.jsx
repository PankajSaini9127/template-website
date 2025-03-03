import React from "react";
import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Header = (props) => {
  const theme = useTheme();

  return (
    <Box
      component="header"
      id="header"
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundImage: "url('/img/intro-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white"
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          py: 8
        }}
      >
        <Box
          sx={{
            maxWidth: 800,
            mx: "auto",
            px: { xs: 2, md: 4 }
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "6.5rem" },
              fontWeight: 700,
              mb: 3,
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              position: "relative",
              "&::after": {
                content: '""',
                display: "block",
                width: "70px",
                height: "4px",
                backgroundColor: theme.palette.secondary.main,
                margin: "20px auto 0",
                borderRadius: "2px"
              }
            }}
          >
            {props.data ? props.data.title : "Welcome to Your Company"}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.3rem", lg: "2rem" },
              fontWeight: 400,
              lineHeight: 1.6,
              mb: 6,
              maxWidth: "700px",
              mx: "auto",
              opacity: 0.9
            }}
          >
            {props.data
              ? props.data.paragraph
              : "We provide innovative solutions to transform your business. Discover how our services can help you achieve your goals and stay ahead of the competition."}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              gap: 2
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="#features"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: { xs: "1.1rem", lg: "1.5rem" },
                fontWeight: 600,
                textTransform: "none",
                borderRadius: theme.shape.borderRadius,
                boxShadow: theme.shadows[4],
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: theme.shadows[6]
                }
              }}
            >
              Learn More
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              href="#contact"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: { xs: "1.1rem", lg: "1.5rem" },
                fontWeight: 600,
                textTransform: "none",
                borderRadius: theme.shape.borderRadius,
                borderWidth: "2px",
                "&:hover": {
                  borderWidth: "2px",
                  backgroundColor: "rgba(255,255,255,0.1)"
                }
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": {
              transform: "translate(-50%, 0)"
            },
            "40%": {
              transform: "translate(-50%, -20px)"
            },
            "60%": {
              transform: "translate(-50%, -10px)"
            }
          }
        }}
      >
        <Button
          href="#features"
          color="inherit"
          sx={{
            minWidth: "auto",
            borderRadius: "50%",
            p: 1,
            backgroundColor: "rgba(255,255,255,0.2)",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.3)"
            }
          }}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </Button>
      </Box>
    </Box>
  );
};
