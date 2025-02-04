import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', color: 'text.secondary', mt: 'auto' }}>
      <Container maxWidth="lg">
        <Box sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box component="img" src="/assets/Fulllogo.png" alt="Interview Prep" sx={{ width: '20%', mb: 2 }} />

          <Typography variant="body2" align="center">
            Copyright © {new Date().getFullYear()}{' '}
            <Link color="inherit" href="https://www.datainception.co/">
              Data Inception
            </Link>
            , All Rights Reserved
          </Typography>

          <Typography variant="body2" align="center">
            Design by{' '}
            <Link color="inherit" href="https://www.datainception.co/">
              Data Inception LLC
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
