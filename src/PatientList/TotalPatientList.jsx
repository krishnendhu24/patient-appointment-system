import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from '../Config/Config';



export default function TotalPatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const patientsRef = collection(db, 'patients');
      const patientSnapshot = await getDocs(patientsRef);

      const data = [];

      for (const doc of patientSnapshot.docs) {
        const patientName = doc.data().name || 'Unnamed';
        const appointmentsRef = collection(db, `patients/${doc.id}/appointments`);
        const appointmentsSnapshot = await getDocs(appointmentsRef);
        data.push({
          name: patientName,
          totalAppointments: appointmentsSnapshot.size,
        });
      }

      setPatients(data);
    };

    fetchData();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-start min-vh-100 bg-light py-5">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '700px' }}>
        <h3 className="text-center text-white bg-info py-3 rounded mb-4">Total Patient Appointments</h3>

        {patients.length === 0 ? (
          <p className="text-center">Loading patients...</p>
        ) : (
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Patient Name</th>
                <th>Total Appointments</th>
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
  );
}



       