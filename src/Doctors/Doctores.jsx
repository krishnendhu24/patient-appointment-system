import React from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem
} from '@mui/material';

export default function AddDoctorForm() {
  return (
    <Box
      sx={{
        mt: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: '95%',
          maxWidth: 800,
          p: 4,
          borderRadius: 4,
          background: 'linear-gradient(to right, #e0f7fa, #fce4ec)',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#1565c0',
            backgroundColor: '#bbdefb',
            borderRadius: 2,
            p: 1
          }}
        >
          Add Doctor Details
        </Typography>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Full Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Email Address" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Mobile Number" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              multiline
              rows={2}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Specialization" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Years of Experience" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Languages Spoken" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Working Days" placeholder="e.g., Monday to Friday" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Working Hours" placeholder="e.g., 9 AM - 5 PM" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Appointment Duration (minutes)" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label="Gender"
              defaultValue=""
              variant="outlined"
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        <Box mt={4} display="flex" justifyContent="center">
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#007bff',
              '&:hover': {
                backgroundColor: '#0056b3'
              },
              borderRadius: 2,
              px: 5
            }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}