// src/App.js
import React from 'react';
import { Box } from '@mui/material';
import RegisterForm from './components/RegisterForm/RegisterForm';

function App() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <RegisterForm />
    </Box>
  );
}

export default App;
