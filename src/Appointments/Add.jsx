
import React, { useEffect, useState } from 'react';
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from '../Config/Config';
import {
  TextField, MenuItem, Select, Button, Box, Typography,
  InputLabel, FormControl, Paper
} from '@mui/material';
import { motion } from 'framer-motion';

export default function Add() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [address, setaddress] = useState("");
  const [mobile, setmobile] = useState("");
  const [doctor, setdoctor] = useState("");
  const [doctorList, setdoctorList] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    const doctorsRef = collection(db, 'Doctors');
    const doctorsSnapshot = await getDocs(doctorsRef);
    const doctorsList = doctorsSnapshot.docs.map(doc => doc.data().name).filter(Boolean);
    setdoctorList(doctorsList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ref = collection(db, "appointments");
    try {
      await addDoc(ref, {
        name,
        age,
        gender,
        address,
        mobile: `+91${mobile}`,
        doctor
      });
      alert("Appointment added successfully.");
      setname(""); setage(""); setgender(""); setaddress(""); setmobile(""); setdoctor("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Box sx={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      {/* 🌄 Background Image */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0,0,0,0.1)),
            url('https://img.freepik.com/free-photo/health-still-life-with-copy-space_23-2148854034.jpg?semt=ais_hybrid&w=740')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
          filter: 'brightness(0.7)'
        }}
      />

      {/* 🌟 Quote and Form Layout */}
      <Box sx={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        px: '6rem',
      }}>
        {/* ✨ Quote */}
       
<Typography
  variant="h3"
  sx={{
    width: '45%',
    fontWeight: 600,
    fontFamily: `'Georgia', serif`,
    color: '#ffffff',
    textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
    lineHeight: 1.5,
  }}
>
  “
  <span style={{ color: '#90caf9' }}>Great works</span> are performed not by{' '}
  <span style={{ color: '#90caf9' }}>strength</span>, but by{' '}
  <span style={{ color: '#90caf9' }}>perseverance</span>.”
</Typography>

        {/* 📝 Appointment Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ width: '50%' }}
        >
          <Box
            sx={{
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: 4,
              overflow: 'hidden'
            }}
          >
            <Paper elevation={8} sx={{
              width: '100%',
              maxWidth: 520,
              p: 4,
              borderRadius: 4,
              bgcolor: 'rgba(255, 255, 255, 0.65)',
              boxShadow: '0 15px 40px rgba(0,0,0,0.25)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}>
              <Typography variant="h4" sx={{
                mb: 1, fontWeight: 700, color: '#336699', textAlign: 'center', fontFamily: 'Poppins, sans-serif'
              }}>
                Book an Appointment
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, textAlign: 'center', color: '#333' }}>
                Fill in the details below to schedule your visit
              </Typography>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <TextField label="Full Name" required value={name} onChange={(e) => setname(e.target.value)} fullWidth size="small" sx={{ backgroundColor: '#f1faff', borderRadius: 1 }} />
                <TextField label="Age" required type="number" inputProps={{ min: 0, max: 120 }} value={age} onChange={(e) => setage(e.target.value.replace(/\D/, ""))} fullWidth size="small" sx={{ backgroundColor: '#f1faff', borderRadius: 1 }} />

                <FormControl required fullWidth size="small" sx={{ backgroundColor: '#f1faff', borderRadius: 1 }}>
                  <InputLabel>Gender</InputLabel>
                  <Select value={gender} onChange={(e) => setgender(e.target.value)} label="Gender">
                    <MenuItem value="" disabled>Select Gender</MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                </FormControl>

                <TextField label="Address" required value={address} onChange={(e) => setaddress(e.target.value)} multiline rows={2} fullWidth size="small" sx={{ backgroundColor: '#f1faff', borderRadius: 1 }} />

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <TextField label="Code" value="+91" InputProps={{ readOnly: true }} size="small" sx={{ width: '100px', backgroundColor: '#f1faff', borderRadius: 1 }} />
                  <TextField label="Mobile Number" type="tel" required value={mobile} onChange={(e) => setmobile(e.target.value.replace(/\D/g, "").slice(0, 10))} inputProps={{ maxLength: 10 }} fullWidth size="small" helperText="Enter a 10-digit number" sx={{ backgroundColor: '#f1faff', borderRadius: 1 }} />
                </Box>

                <FormControl required fullWidth size="small" sx={{ backgroundColor: '#f1faff', borderRadius: 1 }}>
                  <InputLabel>Select Doctor</InputLabel>
                  <Select value={doctor} onChange={(e) => setdoctor(e.target.value)} label="Select Doctor">
                    <MenuItem value="" disabled>Select Doctor</MenuItem>
                    {doctorList.map((doc, index) => (
                      <MenuItem key={index} value={doc}>{doc}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button type="submit" variant="contained" fullWidth sx={{
                    mt: 2,
                    py: 1.5,
                    fontSize: 16,
                    borderRadius: 2,
                    fontWeight: 600,
                    background: 'linear-gradient(135deg,  #204060 0%,  #204060 100%)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                    textTransform: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #132639 0%, #132639 100%)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.35)'
                    }
                  }}>
                    Confirm Appointment
                  </Button>
                </motion.div>
              </form>
            </Paper>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
