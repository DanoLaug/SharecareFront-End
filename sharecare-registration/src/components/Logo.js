import React from 'react';
import { Box } from '@mui/material';
import logo from '../assets/logo.png';

// Logo component to display the Sharecare logo
const Logo = () => (
  <Box 
    component="img" 
    src={logo}
    alt="Logo" 
    sx={{ width: 150 }} 
  />
);

export default Logo;
