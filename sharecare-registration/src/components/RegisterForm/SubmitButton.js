import React from 'react';
import { Button, Box, Typography, Link } from '@mui/material';
import emailIcon from '../../assets/email.png';
import downArrowIcon from '../../assets/down-arrow.png';

const SubmitButton = ({ onSubmit }) => (
  <>
    {/* Main submit button with email icon on the left */}
    <Button variant="contained" fullWidth onClick={onSubmit} 
      sx={{ 
        backgroundColor: '#2a4aa0', 
        color: 'white', 
        padding: '10px 0', 
        fontSize: '1rem', 
        borderRadius: '8px' 
      }}
      
      startIcon={
        <Box 
          component="img" 
          src={emailIcon} 
          alt="Email Icon" 
          sx={{ width: 20, height: 20, filter: 'invert(1)' }} 
        />
      }>
      Continue with email
    </Button>

    {/* Terms and conditions text with a link and down arrow icon */}
    <Typography variant="caption" display="block" align="center" mt={2} sx={{ fontSize: '0.875rem' }}>
      By signing up, I agree to the{' '}
      <Link href="#" sx={{ color: '#9ef3e6', textDecoration: 'underline' }}>Offer Terms</Link>
      <Box component="img" src={downArrowIcon} alt="Down Arrow Icon" sx={{ width: 12, height: 12, marginLeft: 0.5 }} />
    </Typography>
  </>
);

export default SubmitButton;
