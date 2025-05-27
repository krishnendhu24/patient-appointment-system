import { useNavigate } from 'react-router-dom'
import './home.css'
import { Box, Button, Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate('/add-appointment'); // <-- change the route to your actual add page
  };

   const handleTotalList = () =>{
    navigate('/total-appointment-list');
  };

   const handleTotalPatient = () =>{
    navigate('/total-patient-list');
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
              }}
              onClick={item.title === 'Total Appointments' ? handleTotalList : null} // Navigate to total list on click
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
      <Box sx={{ mt: 4 }}>
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
            background: 'linear-gradient(90deg,rgb(3, 18, 31) 0%,rgb(10, 20, 22) 100%)',
            boxShadow: '0 4px 16px rgba(33,150,243,0.3)',
            textTransform: 'none',
            letterSpacing: 0.8,
            transition: '0.3s',
            '&:hover': {
              background: 'linear-gradient(90deg,rgb(5, 11, 12) 0%,rgb(9, 18, 26) 100%)',
              transform: 'scale(1.05)'
            }
          }}
        >
          + Add Appointment
        </Button>
      </Box>
    </Box>
  );
};
export default Dashboard;