import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './login/login';
import Home from './home/home';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './Config/Config';
import AppTopBar from './AppBar/AppBar';
import Add from './Appointments/Add';
import TotalAppointmentList from './AppointmentList/TotalAppointmentList';
import TotalPatientList from './PatientList/TotalPatientList';
import Doctores from './Doctors/Doctores';
import TodaysConsultationList from './ConsultationList/TodaysConsultationList';

function App() {
const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
  if (user) {
    setisLoggedIn(true);
    // ...
  } else {
    setisLoggedIn(false);
  }
});
  },[auth])



  return (
    <div className="App">
      {isLoggedIn&&
    <AppTopBar/>
    }
    <Routes>
      {isLoggedIn?(
        <>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-appointment' element={<Add/>}/>
        <Route path='/total-appointment-list' element={<TotalAppointmentList/>}/>
        <Route path='/total-patient-list' element={<TotalPatientList/>}/>
        <Route path='/todays-consultation-list' element={<TodaysConsultationList />}/>
        <Route path='/doctors' element={<Doctores/>}/>
        </>
    ):
    <Route path='/' element={<Login/>}/>
    }
    </Routes>
    </div>
  );
}

export default App;
