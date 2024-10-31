import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import FormHeader from './FormHeader'; 
import YourInformation from './YourInformation'; 
import InputSection from './InputSection'; 
import SubmitButton from './SubmitButton'; 
import SharecareImage from '../SharecareImage'; 

// RegisterForm component to encapsulate the entire registration form functionality and layout
function RegisterForm() {
  // State to handle form data for each input field
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    email: '',
  });

  // State to track validation errors for each field
  const [errors, setErrors] = useState({});

  // Handler to update formData and clear error messages upon user input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error when input is modified
  };

  // Handler for form submission, validates each field and logs form data
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an errors object to store any missing fields
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required'; // Error message for missing fields
      }
    });

    setErrors(newErrors); // Update errors state with any missing fields

    // Log form data regardless of missing fields
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Box 
      display="flex" 
      flexDirection={{ xs: 'column', md: 'row' }} 
      alignItems="center" 
      width="100%" 
      maxWidth="1200px"
    >
      {/* Sharecare Image component on the left or above the form, depending on screen size */}
      <SharecareImage />
      
      {/* Form Container with responsive width and padding */}
      <Box 
        width={{ xs: '100%', md: '45%' }} 
        maxWidth="500px" 
        p={2} 
        margin="auto"
      >
        {/* Form Header with logo and "How it works" button */}
        <FormHeader />
        
        {/* Inner Box for all form content with custom styling */}
        <Box
          sx={{
            width: '70%', // Adjusts the width of the inner form box
            maxWidth: '400px',
            margin: 'auto',
            padding: 2,
            borderRadius: 2,
            backgroundColor: '#ffffff', // Background color for the form box
          }}
        >
          {/* Title for the registration form */}
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            align="center" 
            mb={2} 
            sx={{ fontFamily: 'Tiempos Headline, serif' }}
          >
            Sign up
          </Typography>

          {/* Section title for "Your information" */}
          <YourInformation />

          {/* Input fields component with form data and error messages */}
          <InputSection 
            formData={formData} 
            onChange={handleChange} 
            errors={errors} 
          />

          {/* Submission button component */}
          <SubmitButton onSubmit={handleSubmit} />
        </Box>
      </Box>
    </Box>
  );
}

export default RegisterForm;
