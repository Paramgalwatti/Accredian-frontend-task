import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';

const Main = ({ openModal }) => {
  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Refer & Earn
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Invite your friends and earn rewards!
      </Typography>
      <Box mt={4}>
        <Button variant="contained" color="primary" onClick={openModal}>
          Refer Now
        </Button>
      </Box>
    </Container>
  );
};

export default Main;
