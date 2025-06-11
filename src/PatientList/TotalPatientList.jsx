import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from '../Config/Config';

export default function TotalPatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const appointmentsRef = collection(db, 'appointments');
      const appointmentsSnapshot = await getDocs(appointmentsRef);

      // Group approved appointments by patient name
      const patientMap = {};
      appointmentsSnapshot.forEach(doc => {
        const data = doc.data();
        if (data.status === 'Approved') {
          const name = data.name || 'Unnamed';
          if (!patientMap[name]) {
            patientMap[name] = 0;
          }
          patientMap[name]++;
        }
      });

      const data = Object.entries(patientMap).map(([name, totalAppointments]) => ({
        name,
        totalAppointments
      }));

      setPatients(data);
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "url('https://img.freepik.com/free-photo/health-still-life-with-copy-space_23-2148854034.jpg?semt=ais_hybrid&w=740')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)',
          zIndex: 1
        }}
      />

      {/* Centered Content */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          padding: '20px',
        
        }}
      >
        <div
          className="shadow p-4"
          style={{
            width: '100%',
            maxWidth: '700px',
            background: 'rgba(255, 255, 255, 0.15)', // transparent white
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: '#fff' // White text to contrast the blur
          }}
        >
          <h3 className="text-center text-white bg-info py-3 rounded mb-4">
            Total Approved Patient Appointments
          </h3>

          {patients.length === 0 ? (
            <p className="text-center">No approved appointments found.</p>
          ) : (
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Patient Name</th>
                  <th>Total Approved Appointments</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{patient.name}</td>
                    <td>{patient.totalAppointments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}