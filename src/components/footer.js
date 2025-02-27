import React from "react";
import { Box, Container, Typography, useTheme, Grid, Link, IconButton, Divider } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Info, Work, Article, Help, ContactSupport, Policy } from "@mui/icons-material";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: theme.palette.primary.dark,
        color: "white",
        textAlign: "center",
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Company
            </Typography>
            <Box mt={1}>
              <Typography variant="body2" display="flex" alignItems="center" justifyContent="center" sx={{ mb: 1 }}>
                <Info fontSize="small" sx={{ mr: 1 }} /> About Us
              </Typography>
              <Typography variant="body2" display="flex" alignItems="center" justifyContent="center" sx={{ mb: 1 }}>
                <Work fontSize="small" sx={{ mr: 1 }} /> Careers
              </Typography>
              <Typography variant="body2" display="flex" alignItems="center" justifyContent="center">
                <Article fontSize="small" sx={{ mr: 1 }} /> Blog
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Support
            </Typography>
            <Box mt={1}>
              <Typography variant="body2" display="flex" alignItems="center" justifyContent="center" sx={{ mb: 1 }}>
                <Help fontSize="small" sx={{ mr: 1 }} /> Help Center
              </Typography>
              <Typography variant="body2" display="flex" alignItems="center" justifyContent="center" sx={{ mb: 1 }}>
                <ContactSupport fontSize="small" sx={{ mr: 1 }} /> Contact Us
              </Typography>
              <Typography variant="body2" display="flex" alignItems="center" justifyContent="center">
                <Policy fontSize="small" sx={{ mr: 1 }} /> Privacy Policy
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Follow Us
            </Typography>
            <Box mt={1}>
              <IconButton href="#" color="inherit" sx={{ mx: 1 }}>
                <Facebook fontSize="large" />
              </IconButton>
              <IconButton href="#" color="inherit" sx={{ mx: 1 }}>
                <Twitter fontSize="large" />
              </IconButton>
              <IconButton href="#" color="inherit" sx={{ mx: 1 }}>
                <LinkedIn fontSize="large" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, backgroundColor: "rgba(255, 255, 255, 0.2)" }} />
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          &copy; {new Date().getFullYear()} ERA Info Solution. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};
