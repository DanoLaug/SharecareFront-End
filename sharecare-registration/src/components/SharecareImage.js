import React from 'react';
import { Box } from '@mui/material';
import sharecareImage from '../assets/sharecare.png';

// SharecareImage component to display a promotional image
const SharecareImage = () => (
  <Box component="img" src={sharecareImage} alt="Sharecare Promo" sx={{
    width: { xs: '100%', md: '50%' },
    height: 'auto', // Ensure the height scales naturally
    objectFit: 'contain', // Prevent any cropping
    borderRadius: 0, // Remove any border radius
  }} />
);

export default SharecareImage;
