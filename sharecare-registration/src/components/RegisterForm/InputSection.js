import React from 'react';
import { Box, TextField, InputAdornment, MenuItem } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import pencilIcon from '../../assets/pencil.png'; // Importing the pencil icon for end adornment

// Default input style for consistent appearance
const inputStyle = {
  marginBottom: '0px', // Default margin for most fields, allowing customization where needed
  backgroundColor: '#f0f8ff',
  borderRadius: 1,
};

// InputSection component to handle all form inputs, with individual error handling
const InputSection = ({ formData, onChange, errors }) => (
  <Box>
    {/* Full name input field with pencil icon on the right */}
    <TextField
      name="fullName"
      fullWidth
      placeholder="Full name"
      value={formData.fullName}
      onChange={onChange}
      error={!!errors.fullName}
      helperText={errors.fullName}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Box component="img" src={pencilIcon} alt="Edit Icon" sx={{ width: 20, height: 20 }} />
          </InputAdornment>
        ),
      }}
      sx={inputStyle}
    />

    {/* Address input field with pencil icon on the right */}
    <TextField
      name="address"
      fullWidth
      placeholder="Address"
      value={formData.address}
      onChange={onChange}
      error={!!errors.address}
      helperText={errors.address}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Box component="img" src={pencilIcon} alt="Edit Icon" sx={{ width: 20, height: 20 }} />
          </InputAdornment>
        ),
      }}
      sx={inputStyle}
    />

    {/* City and State fields aligned side-by-side, without gap between them */}
    <Box display="flex" gap={0}>
      <TextField
        name="city"
        fullWidth
        placeholder="City"
        value={formData.city}
        onChange={onChange}
        error={!!errors.city}
        helperText={errors.city}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Box component="img" src={pencilIcon} alt="Edit Icon" sx={{ width: 20, height: 20 }} />
            </InputAdornment>
          ),
        }}
        sx={inputStyle}
      />
      <TextField
        name="state"
        fullWidth
        placeholder="State"
        value={formData.state}
        onChange={onChange}
        error={!!errors.state}
        helperText={errors.state}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Box component="img" src={pencilIcon} alt="Edit Icon" sx={{ width: 20, height: 20 }} />
            </InputAdornment>
          ),
        }}
        sx={inputStyle}
      />
    </Box>

    {/* Phone number input with Phone icon on the left */}
    <TextField
      name="phoneNumber"
      fullWidth
      placeholder="Phone number"
      value={formData.phoneNumber}
      onChange={onChange}
      error={!!errors.phoneNumber}
      helperText={errors.phoneNumber}
      InputProps={{
        startAdornment: <InputAdornment position="start"><PhoneIcon /></InputAdornment>, // Using phone icon on the left
      }}
      sx={inputStyle}
    />

    {/* Date of birth input field with pencil icon on the right */}
    <TextField
      name="dateOfBirth"
      fullWidth
      placeholder="Date of birth"
      type="date"
      value={formData.dateOfBirth}
      onChange={onChange}
      error={!!errors.dateOfBirth}
      helperText={errors.dateOfBirth}
      InputLabelProps={{ shrink: true }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Box component="img" src={pencilIcon} alt="Edit Icon" sx={{ width: 20, height: 20 }} />
          </InputAdornment>
        ),
      }}
      sx={inputStyle}
    />

    {/* Gender select field with a starting label */}
    <TextField
      name="gender"
      fullWidth
      placeholder="Gender"
      select
      value={formData.gender}
      onChange={onChange}
      error={!!errors.gender}
      helperText={errors.gender}
      InputProps={{ startAdornment: <InputAdornment position="start">Gender</InputAdornment> }}
      sx={{ ...inputStyle, marginBottom: '25px' }} // Add 25px spacing below Gender field
    >
      <MenuItem value="male">Male</MenuItem>
      <MenuItem value="female">Female</MenuItem>
      <MenuItem value="other">Other</MenuItem>
    </TextField>

    {/* Email input field with customizable styling and additional spacing below */}
    <TextField
      name="email"
      fullWidth
      placeholder="Email"
      value={formData.email}
      onChange={onChange}
      error={!!errors.email}
      helperText={errors.email}
      sx={{ ...inputStyle, marginBottom: '25px', borderRadius: 1 }} // 25px spacing below Email
    />
  </Box>
);

export default InputSection;
