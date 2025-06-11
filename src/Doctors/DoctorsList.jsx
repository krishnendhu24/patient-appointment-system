import React, { useEffect, useState } from 'react'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  Stack
} from '@mui/material';
import { collection, getDocs,query,where,orderBy } from "firebase/firestore";
import { db } from '../Config/Config';

export default function DoctorsList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {   
    const fetchDoctors = async () => {
      const doctorsRef = collection(db, "Doctors");
      const q = query(doctorsRef, where("gender", "==", "Male"), orderBy("age", "asc"));
      const snapshot = await getDocs(q);
      const docs = snapshot.docs.map(doc => doc.data());
      setDoctors(docs);
    };
    fetchDoctors();
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('https://img.freepik.com/free-photo/health-still-life-with-copy-space_23-2148854034.jpg?semt=ais_hybrid&w=740')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8)',
          zIndex: -2
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: -1
        }
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '1200px',
          zIndex: 1
        }}
      >
        {doctors.map((doctor, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                p: 2,
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6
                }
              }}
            >
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6" color="#fff" fontWeight={700}>
                    Dr. {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">Age: {doctor.age}</Typography>
                  <Typography variant="body2" color="text.secondary">Email: {doctor.email}</Typography>
                  <Typography variant="body2" color="text.secondary">Experience: {doctor.experience}</Typography>
                  <Typography variant="body2" color="text.secondary">Specialization: {doctor.specialization}</Typography>
                  <Typography variant="body2" color="text.secondary">Languages Spoken: {doctor.language_spoken}</Typography>
                  <Typography variant="body2" color="text.secondary">Gender: {doctor.gender}</Typography>
                  <Typography variant="body2" color="text.secondary">Address: {doctor.address}</Typography>
                  <Typography variant="body2" color="text.secondary">Mobile: {doctor.mobile}</Typography>
                </Stack>
              </CardContent>
              <CardActions>
                <Button size="small" color="#fff">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
