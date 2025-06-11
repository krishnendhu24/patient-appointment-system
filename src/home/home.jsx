import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  Paper,
  Container
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Config/Config';
import CountUp from 'react-countup';
import {
  EventAvailable,
  People,
  MedicalServices,
  GroupRemove
} from '@mui/icons-material';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const Dashboard = () => {
  const navigate = useNavigate();

  const cardData = [
    { title: 'Appointment Request', path: '/total-appointment-list', icon: <EventAvailable sx={{ fontSize: 40 }} /> },
    { title: "Today's Consultations", path: '/todays-consultation-list', icon: <EventAvailable sx={{ fontSize: 40 }} /> },
    { title: 'Doctors', path: '/doctors-list', icon: <MedicalServices sx={{ fontSize: 40 }} /> },
    { title: 'Total Patients', path: '/total-patient-list', icon: <People sx={{ fontSize: 40 }} /> },
    { title: 'Cancelled Appointments', path: '/cancelled-appointment-list', icon: <GroupRemove sx={{ fontSize: 40 }} /> }
  ];

  const [doctorCount, setDoctorCount] = useState(0);
  const [cancelledCount, setCancelledCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);
  const [appointmentRequestCount, setAppointmentRequestCount] = useState(0);

  useEffect(() => {
    const fetchDoctors = async () => {
      const snapshot = await getDocs(collection(db, 'Doctors'));
      setDoctorCount(snapshot.size);
    };
    const fetchCancelled = async () => {
      const snapshot = await getDocs(collection(db, 'appointments'));
      const cancelled = snapshot.docs.filter(doc => doc.data().status === 'Cancelled');
      setCancelledCount(cancelled.length);
    };
    const fetchPatients = async () => {
      const snapshot = await getDocs(collection(db, 'appointments'));
      const approvedPatients = new Set();
      snapshot.docs.forEach(doc => {
        const data = doc.data();
        if (data.status === 'Approved' && data.name) {
          approvedPatients.add(data.name);
        }
      });
      setPatientCount(approvedPatients.size);
    };
    const fetchAppointmentRequests = async () => {
      const snapshot = await getDocs(collection(db, 'appointments'));
      const requests = snapshot.docs.filter(doc => {
        const status = doc.data().status;
        return status !== 'Approved' && status !== 'Cancelled';
      });
      setAppointmentRequestCount(requests.length);
    };
    fetchDoctors();
    fetchCancelled();
    fetchPatients();
    fetchAppointmentRequests();
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundImage: "url('https://img.freepik.com/free-photo/female-doctor-talking-mature-woman-while-visiting-her-home-coronavirus-epidemic_637285-7798.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Box textAlign="center" color="white" mb={5}>
            <Typography variant="h3" fontWeight={700} gutterBottom>
              Find a Doctor and Book an Appointment
            </Typography>
            <Typography variant="h6" color="gray.200" mb={2}>
              Manage consultations, doctors, and patients efficiently.
            </Typography>
            <Typography
              variant="h5"
              fontStyle="italic"
              fontWeight={500}
              color="#FFD700"
              sx={{ fontFamily: 'serif' }}
            >
              ❝ We are here for your care ❞
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3} justifyContent="center" mb={5}>
          {cardData.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={item.title}>
              <motion.div
                custom={index + 1}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                  }}
                  onClick={() => navigate(item.path)}
                >
                  <Box mb={1}>{item.icon}</Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Typography variant="h6">
                    {item.title !== "Today's Consultations" && (
                    <CountUp
                      end={
                        item.title === 'Appointment Request'
                          ? appointmentRequestCount
                          : item.title === 'Doctors'
                          ? doctorCount
                          : item.title === 'Cancelled Appointments'
                          ? cancelledCount
                          : item.title === 'Total Patients'
                          ? patientCount
                          : 0
                    }
                      duration={1}
                    />
                    )}
                  </Typography>



                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <motion.div custom={6} initial="hidden" animate="visible" variants={fadeInUp}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#009985',
                  color: '#fff',
                  fontWeight: 600,
                  borderRadius: 3,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#00332c'
                  }
                }}
                onClick={() => navigate('/add-appointment')}
              >
                + Add Appointment
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <motion.div custom={7} initial="hidden" animate="visible" variants={fadeInUp}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#009985',
                  color: '#fff',
                  fontWeight: 600,
                  borderRadius: 3,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#00332c'
                  }
                }}
                onClick={() => navigate('/doctors')}
              >
                + Add Doctor
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <motion.div custom={8} initial="hidden" animate="visible" variants={fadeInUp}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#009985',
                  color: '#fff',
                  fontWeight: 600,
                  borderRadius: 3,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#00332c'
                  }
                }}
                onClick={() => navigate('/Hospital')}
              >
                Hospital
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;