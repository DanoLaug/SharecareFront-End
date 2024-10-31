import React from 'react';
import { Box, Typography } from '@mui/material';
import EventIcon from '@mui/icons-material/Event'; 
import { sectionTitleStyle } from './styles'; 

// YourInformation component to display a section title with an icon
const YourInformation = () => (
  <Box 
    display="flex" 
    alignItems="center" 
    sx={sectionTitleStyle} // Applies custom styling for border, padding, etc.
  >
    {/* Event icon displayed to the left of the section title */}
    <EventIcon sx={{ marginRight: 1 }} />

    {/* Section title text */}
    <Typography variant="h6">Your information</Typography>
  </Box>
);

export default YourInformation;
