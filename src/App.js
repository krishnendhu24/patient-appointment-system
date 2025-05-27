import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './login/login';
import Home from './home/home';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './Config/Config';
import AppTopBar from './AppBar/AppBar';
import Add from './Appointments/Add';

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
        </>
    ):
    <Route path='/' element={<Login/>}/>
    }
    </Routes>
    </div>
  );
}

export default App;
