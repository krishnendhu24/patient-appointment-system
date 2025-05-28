import { useNavigate } from 'react-router-dom';
import './home.css';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate('/add-appointment');
  };

  const handleTotalList = () => {
    navigate('/total-appointment-list');
  };

  const handleTotalPatient = () => {
    navigate('/total-patient-list');
  };

  const handleDoctors = () => {
    navigate('/doctors'); // <- Make sure this route exists in your app
  };

  const handleTodaysConsultation = () => {
    navigate('/todays-consultation-list');
  };

  return (
    <Box sx={{ mt: 5, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Appointment Management Dashboard
      </Typography>

      {/* Top Four Stats */}
      <Grid container spacing={3} justifyContent="center">
        {[
          { title: 'Total Patients', color: '#2196f3' },
          { title: "Today's Consultations", color: '#4caf50' },
          { title: 'Cancelled Appointments', color: '#f44336' },
          { title: 'Total Appointments', color: '#9c27b0' }
        ].map((item, idx) => (
          <Grid item xs={10} sm={6} md={3} key={idx}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
                background: item.color,
                color: '#fff',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
              onClick={
                item.title === 'Total Appointments'
                  ? handleTotalList
                  : item.title === 'Total Patients'
                  ? handleTotalPatient
                  : item.title === 'Today\'s Consultations'
                  ? handleTodaysConsultation
                  : null
              }
            >
              {item.title}
              <Typography variant="h5" mt={1}>
                --
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Add Appointment Button */}
      <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Button
          variant="contained"
          size="medium"
          onClick={handleAdd}
          sx={{
            px: 3,
            py: 1,
            fontWeight: 600,
            fontSize: '0.95rem',
            borderRadius: 2,
            background: 'linear-gradient(90deg,rgb(95, 91, 104) 0%,rgb(150, 146, 160) 100%)',
            boxShadow: '0 4px 16px rgba(36, 39, 41, 0.3)',
            textTransform: 'none',
            letterSpacing: 0.8,
            transition: '0.3s',
            '&:hover': {
              background: 'linear-gradient(90deg,rgb(125, 120, 135) 0%,rgb(125, 120, 135) 100%)',
              transform: 'scale(1.05)'
            }
          }}
        >
          + Add Appointment
        </Button>

        {/* Doctors Button */}
        <Button
          variant="contained"
          size="medium"
          onClick={handleDoctors}
          sx={{
            px: 3,
            py: 1,
            fontWeight: 600,
            fontSize: '0.95rem',
            borderRadius: 2,
            background: 'linear-gradient(90deg,rgb(95, 91, 104) 0%,rgb(150, 146, 160) 100%)',
            boxShadow: '0 4px 16px rgba(36, 39, 41, 0.3)',
            textTransform: 'none',
            letterSpacing: 0.8,
            transition: '0.3s',
            '&:hover': {
              background: 'linear-gradient(90deg,rgb(125, 120, 135) 0%,rgb(125, 120, 135) 100%)',
              transform: 'scale(1.05)'            }
          }}
        >
          Doctors
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
