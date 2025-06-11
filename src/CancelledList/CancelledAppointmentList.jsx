import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import Paper from '@mui/material/Paper';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Config/Config';

export default function CancelledAppointmentList() {
  const [cancelled, setCancelled] = useState([]);

  useEffect(() => {
    const fetchCancelled = async () => {
      const AppointmentRef = collection(db, 'appointments');
      const AppointmentSnapshot = await getDocs(AppointmentRef);
      const cancelledList = [];
      AppointmentSnapshot.forEach(doc => {
        const data = doc.data();
        if (data.status === 'Cancelled') {
          cancelledList.push({
            id: doc.id,
            ...data
          });
        }
      });
      setCancelled(cancelledList);
    };
    fetchCancelled();
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url('https://img.freepik.com/free-photo/health-still-life-with-copy-space_23-2148854034.jpg?semt=ais_hybrid&w=740')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
          zIndex: 1
        }}
      />

      {/* Centered Paper with Blur */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Paper
          elevation={8}
          sx={{
            width: '90%',
            maxWidth: 1000,
            p: 3,
            borderRadius: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: '#fff'
          }}
        >
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#ffffff' }}
          >
            Cancelled Appointments
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                  <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Patient Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Age</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Gender</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Mobile</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Address</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Doctor</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cancelled.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: '#fff' }}>{row.name}</TableCell>
                    <TableCell sx={{ color: '#fff' }}>{row.age}</TableCell>
                    <TableCell sx={{ color: '#fff' }}>{row.gender}</TableCell>
                    <TableCell sx={{ color: '#fff' }}>{row.mobile}</TableCell>
                    <TableCell sx={{ color: '#fff' }}>{row.address}</TableCell>
                    <TableCell sx={{ color: '#fff' }}>{row.doctor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
}
