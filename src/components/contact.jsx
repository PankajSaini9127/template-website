import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Paper,
} from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error.text);
      });
  };

  return (
    <Box
      sx={{
        backgroundImage: "url(https://source.unsplash.com/1600x900/?contact,office)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 10, md: 8 },
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Paper elevation={5} sx={{ p: 5, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.9)" }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }}} fontWeight={700} gutterBottom>
                Get In Touch
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={3} sx={{fontSize: { xs: "1rem", lg:"1.5rem" }}}>
                Fill out the form below, and we’ll get back to you soon.
              </Typography>
              <Box>
                <Typography display="flex" alignItems="center" mb={2} sx={{fontSize: { xs: "0.8rem", lg:"1.2rem" }}}>
                  <PhoneIcon color="primary" sx={{ mr: 1 }} /> +1 234 567 890
                </Typography>
                <Typography display="flex" alignItems="center" mb={2} sx={{fontSize: { xs: "0.8rem", lg:"1.2rem" }}}>
                  <EmailIcon color="primary" sx={{ mr: 1 }} /> contact@example.com
                </Typography>
                <Typography display="flex" alignItems="center" sx={{fontSize: { xs: "0.8rem", lg:"1.2rem" }}}>
                  <ContactMailIcon color="primary" sx={{ mr: 1 }} /> 1234 Business Street, City, Country
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      sx={{fontSize: { xs: "0.8rem", lg:"1.2rem" }}}
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      sx={{fontSize: { xs: "0.8rem", lg:"1.2rem" }}}
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      sx={{fontSize: { xs: "0.8rem", lg:"1.2rem" }}}
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                    />
                  </Grid>
                </Grid>
                <Box mt={3} textAlign="center">
                  <Button type="submit" variant="contained" color="primary" size="large" sx={{fontSize: { xs: "0.8rem", lg:"1.2rem" }}}>
                    Send Message
                  </Button>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};
