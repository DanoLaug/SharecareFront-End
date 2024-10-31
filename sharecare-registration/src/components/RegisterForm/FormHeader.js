import React from 'react';
import { Box, Button } from '@mui/material';
import Logo from '../Logo'; // Importing the Logo component
import { buttonStyle } from './styles'; // Importing styles for the button

// FormHeader component, used to display the logo and "How it works" button
const FormHeader = () => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    sx={{
      width: '100%', // Ensures the header takes the full container width
      position: { xs: 'fixed', md: 'relative' }, // Fixed position on mobile, relative on desktop
      top: 0,
      left: 0, // Aligns header to the left edge on mobile
      backgroundColor: '#ffffff', // Background color for the header
      padding: 2,
      zIndex: 1, // Ensures the header stays on top
      borderBottom: { xs: '1px solid #ddd', md: 'none' }, // Adds a bottom border on mobile
      boxSizing: 'border-box', // Includes padding in the element’s total width and height
    }}
  >
    {/* Logo displayed on the left side */}
    <Logo />
    
    {/* "How it works" button on the right side */}
    <Button variant="outlined" sx={buttonStyle}>How it works</Button>
  </Box>
);

export default FormHeader;
