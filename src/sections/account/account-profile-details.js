import Snackbar from '@mui/material/Snackbar'; // Change the import path

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { useState } from 'react';


const AccountProfileDetails = () => {
  const [successMessage, setSuccessMessage] = useState('');
  if (localStorage.getItem("userEmail") === null) {
    router.push("/auth/login");
  }


  const [values, setValues] = useState("");
  

  const handleCloseSuccessMessage = () => {
    setSuccessMessage('');
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // For now, let's just show a success message
    
  
    try {
      let response = null;
  
      if (localStorage.getItem("userRole").toLowerCase() !== 'artist') {
        response = await axios.post('/api/profile_proxy', values, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } else {
        response = await axios.post('/api/artist_profile_proxy', values, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
  
      const data = response.data; // Response data is directly available in response.data
  
      if (response.status === 200) {
        // API call successful, perform any necessary actions
        console.log('API response:', data);
        setSuccessMessage('Profile details saved successfully');
      } else {
        // Handle API errors with more details
        console.error('API error:', response.status, data);
      }
    } catch (error) {
      // Handle other errors, e.g., network errors
      console.error('Network error:', error);
    }
  };
  



  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      {successMessage && (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleCloseSuccessMessage}>
          <Alert severity="success" onClose={handleCloseSuccessMessage}>
            {successMessage}
          </Alert>
        </Snackbar>
      )}
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
          <Grid container spacing={3}>
  <Grid item xs={12} md={6}>
    <TextField
      fullWidth
      helperText="Please specify the first name"
      label="First name"
      name="first_name"
    />
  </Grid>
  <Grid item xs={12} md={6}>
    <TextField
      fullWidth
      label="Last name"
      name="last_name"
    />
  </Grid>
  <Grid item xs={12} md={6}>
    <TextField
      fullWidth
      label="Email Address"
      name="email"
    />
  </Grid>
  <Grid item xs={12} md={6}>
    <TextField
      fullWidth
      label="Phone Number"
      name="phone_number"
      type="number"
    />
  </Grid>
  <Grid item xs={12} md={6}>
    <TextField
      fullWidth
      label="Country"
      name="country"
    />
  </Grid>
  <Grid item xs={12} md={6}>
    <TextField
      fullWidth
      label="State"
      name="state"
    />
  </Grid>
</Grid>

          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button type="submit" variant="contained">
            Save details
          </Button>
        </CardActions>
      </Card>
      
    </form>
  );
};

export default AccountProfileDetails;
