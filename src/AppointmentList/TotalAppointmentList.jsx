import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

const TotalAppointmentList = () => {
  const data = [
    { doctor: 'Dr. Smith', appointments: 3 },
    { doctor: 'Dr. Lee', appointments: 2 },
    { doctor: 'Dr. Patel', appointments: 5 },
    { doctor: 'Dr. Johnson', appointments: 4 },
    { doctor: 'Dr. Gupta', appointments: 6 },
    { doctor: 'Dr. Kim', appointments: 3 },
    { doctor: 'Dr. Fernandez', appointments: 7 }
  ];

  return (
    <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
      <Paper
        elevation={6}
        sx={{
          width: '90%',
          maxWidth: 700,
          borderRadius: 4,
          p: 3,
          backgroundColor: '#f3f4f6'
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#3f51b5' }}
        >
          Total Appointments
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#e0e7ff' }}>
                <TableCell sx={{ fontWeight: 'bold', color: '#1e40af' }}>
                  Doctor
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#1e40af' }}>
                  Total Appointments
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    '&:nth-of-type(even)': { backgroundColor: '#f0f9ff' }
                  }}
                >
                  <TableCell>{row.doctor}</TableCell>
                  <TableCell>{row.appointments}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default TotalAppointmentList;

