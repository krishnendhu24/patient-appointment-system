import React, { useEffect, useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Stack
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../Config/Config';

export default function TotalAppointmentList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const AppointmentRef = collection(db, 'appointments');
    const AppointmentSnapshot = await getDocs(AppointmentRef);
    const appointmentsList = [];
    AppointmentSnapshot.forEach(doc => {
      const data = doc.data();
      if (data.doctor) {
        appointmentsList.push({
          id: doc.id,
          ...data
        });
      }
    });
    setData(appointmentsList);
  };

  const handleRequest = async (id, status) => {
    updateDoc(doc(db, 'appointments', id), {
      status: status
    })
      .then(() => {
        alert('Appointment status updated successfully');
        fetchAppointments();
      })
      .catch((error) => {
        console.error('Error updating appointment status:', error);
      });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url('https://img.freepik.com/free-photo/health-still-life-with-copy-space_23-2148854034.jpg?semt=ais_hybrid&w=740')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8)', // only darken, no blur
          zIndex: -2
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.3)', // subtle dark overlay
          zIndex: -1
        }
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: '95%',
          maxWidth: 1100,
          borderRadius: 4,
          p: 4,
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid 0.3 rgba(255, 255, 255,0.30) ',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#f2f2f2' }}
        >
          Appointment Requests
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'rgba(255, 255, 255,0.35)' }}>
                {['Patient Name', 'Age', 'Gender', 'Mobile', 'Address', 'Doctor', 'Actions'].map((head, idx) => (
                  <TableCell key={idx} sx={{ fontWeight: 'bold', color: '#333' }}>
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                 
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.mobile}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.doctor}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button
                        onClick={() => handleRequest(row.id, 'Approved')}
                        disabled={!!row.status}
                        variant="contained"
                        size="small"
                        startIcon={<CheckIcon />}
                        sx={{
                          backgroundColor: '#4caf50',
                          '&:hover': { backgroundColor: '#388e3c' }
                        }}
                      >
                        Approve
                      </Button>
                      <Button
                        onClick={() => handleRequest(row.id, 'Cancelled')}
                        disabled={!!row.status}
                        variant="contained"
                        size="small"
                        startIcon={<CancelIcon />}
                        sx={{
                          backgroundColor: '#f44336',
                          '&:hover': { backgroundColor: '#d32f2f' }
                        }}
                      >
                        Cancel
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}









