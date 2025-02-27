import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        secondary : {
        main: '#3f51b5', // Primary color
        light: '#757de8', // Lighter shade for hover effects
        dark: '#002984', // Darker shade for contrast
        contrastText: '#ffffff', // Ensuring readability
      },
      primary  : {
        main: '#f50057', // Secondary color
        light: '#ff5983',
        dark: '#bb002f',
        contrastText: '#ffffff',
      },
      background: {
        default: '#f4f6f8', // Light background for a modern feel
        paper: '#ffffff', // Paper surfaces like cards
      },
      text: {
        primary: '#212121', // Default text color
        secondary: '#757575', // Subdued text for less important content
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontSize: '2.5rem', fontWeight: 700 },
      h2: { fontSize: '2rem', fontWeight: 600 },
      h3: { fontSize: '1.75rem', fontWeight: 500 },
      body1: { fontSize: '1rem', lineHeight: 1.6 },
      button: { textTransform: 'none', fontWeight: 600 ,fontSize: '2rem'},
    },
    shape: {
      borderRadius: 8, // Slightly rounded corners for a modern UI
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 25, // Rounded buttons for better UX
            padding: '10px 20px',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            padding: '20px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow effect
          },
        },
      },
    },
  });

export default theme;