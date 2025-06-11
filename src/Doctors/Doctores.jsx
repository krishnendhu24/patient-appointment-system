 import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
  InputAdornment,
  Alert
} from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../Config/Config';

export default function AddDoctorForm() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [emailaddress, setEmailAddress] = useState("");
  const [address, setaddress] = useState("");
  const [mobile, setmobile] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [specialization, setspecialization] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [languagesSpoken, setLanguagesSpoken] = useState("");
  const [gender, setGender] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !name.trim() ||
      !age.trim() ||
      !emailaddress.trim() ||
      !mobile.trim() ||
      !specialization.trim() ||
      !yearsOfExperience.trim() ||
      !gender.trim()
    ) {
      alert("Please fill out all the fields.");
      return;
    }

    const fullMobileNumber = `${countryCode}${mobile}`;
    const ref = collection(db, "Doctors");
    await addDoc(ref, {
      name,
      age,
      email: emailaddress,
      mobile: fullMobileNumber,
      address,
      specialization,
      experience: yearsOfExperience,
      language_spoken: languagesSpoken,
      gender
    });

    setSuccessMessage("Details submitted successfully");

    setname("");
    setage("");
    setEmailAddress("");
    setaddress("");
    setmobile("");
    setCountryCode("+91");
    setspecialization("");
    setYearsOfExperience("");
    setLanguagesSpoken("");
    setGender("");
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(https://img.freepik.com/free-photo/health-still-life-with-copy-space_23-2148854034.jpg?semt=ais_hybrid&w=740)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: 2, md: 8 },
      }}
    >
      {/* Overlay to reduce brightness */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 0
        }}
      />

      {/* Quote on the left side */}
      <Typography
        variant="h3"
        sx={{
          position: 'absolute',
          left: { xs: 16, md: 64 },
          top: { xs: 40, md: '30%' },
          maxWidth: 400,
          fontFamily: 'Georgia, serif',
          fontWeight: 600,
          fontSize: { xs: '1.8rem', md: '2.8rem' },
          color: '#ffffff',
          textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
          zIndex: 1,
          lineHeight: 1.3,
        }}
      >
        Don’t go through your <br />
        <span style={{ color: '#90caf9' }}>health journey</span> alone.
      </Typography>

      {/* Form on the right */}
      <Paper
        elevation={10}
        sx={{
          zIndex: 1,
          width: '100%',
          maxWidth: 600,
          borderRadius: 4,
          p: 4,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
          ml: 'auto'
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#204060',
            mb: 3,
          }}
        >
          Add Doctor Details
        </Typography>

        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Full Name"
                variant="outlined"
                value={name}
                onChange={e => setname(e.target.value)}
                sx={{ backgroundColor: '#f1faff', borderRadius: 1 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Age"
                variant="outlined"
                value={age}
                onChange={e => {
                  const val = e.target.value;
                  if (/^\d*$/.test(val)) {
                    setage(val);
                  }
                }}
                sx={{ backgroundColor: '#f1faff', borderRadius: 1 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                type="email"
                label="Email Address"
                variant="outlined"
                value={emailaddress}
                onChange={e => setEmailAddress(e.target.value)}
                sx={{ backgroundColor: '#f1faff', borderRadius: 1 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Mobile Number"
                variant="outlined"
                value={mobile}
                onChange={e => {
                  const val = e.target.value;
                  if (/^\d{0,10}$/.test(val)) {
                    setmobile(val);
                  }
                }}
                sx={{ backgroundColor: '#f1faff', borderRadius: 1 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <TextField
                        select
                        value={countryCode}
                        onChange={e => setCountryCode(e.target.value)}
                        variant="standard"
                        sx={{ minWidth: 70 }}
                      >
                        <MenuItem value="+91">+91</MenuItem>
                        <MenuItem value="+1">+1</MenuItem>
                        <MenuItem value="+44">+44</MenuItem>
                        <MenuItem value="+61">+61</MenuItem>
                      </TextField>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Address"
                variant="outlined"
                multiline
                rows={2}
                value={address}
                onChange={e => setaddress(e.target.value)}
                sx={{ backgroundColor: '#f1faff', borderRadius: 1 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Specialization"
                variant="outlined"
                value={specialization}
                onChange={e => setspecialization(e.target.value)}
                sx={{ backgroundColor: '#f1faff', borderRadius: 1 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Years of Experience"
                variant="outlined"
                value={yearsOfExperience}
                onChange={e => {
                  const val = e.target.value;
                  if (/^\d{0,2}$/.test(val)) {
                    setYearsOfExperience(val);
                  }
                }}
                sx={{ backgroundColor: '#f1faff', borderRadius: 1 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Languages Spoken"
                variant="outlined"
                value={languagesSpoken}
                onChange={e => setLanguagesSpoken(e.target.value)}
                sx={{ backgroundColor: '#f1faff', borderRadius: 1 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                style={{ width: '200px' }}
                select
                label="Gender"
                value={gender}
                onChange={e => setGender(e.target.value)}
                variant="outlined"
                sx={{ backgroundColor: '#f1faff', borderRadius: 1 }}
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
              type="submit"
              sx={{
                backgroundColor: '#204060',
                '&:hover': {
                  backgroundColor: '#132639'
                },
                borderRadius: 3,
                px: 5,
                py: 1.5,
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}