import React from 'react';

export default function TotalAppointmentList() {
  const appointments = [
    { doctor: 'Dr. Smith', patient: 'Alice' },
    { doctor: 'Dr. Smith', patient: 'Bob' },
    { doctor: 'Dr. Lee', patient: 'Charlie' },
    { doctor: 'Dr. Smith', patient: 'David' },
    { doctor: 'Dr. Lee', patient: 'Eva' }
  ];

  // Count total appointments per doctor
  const totalAppointments = appointments.reduce((acc, curr) => {
    acc[curr.doctor] = (acc[curr.doctor] || 0) + 1;
    return acc;
  }, {});

  const tableData = Object.entries(totalAppointments); // [ [doctor, count], ... ]

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Total Appointments</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerCellStyle}>Doctor</th>
            <th style={headerCellStyle}>Total Appointments</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(([doctor, count], index) => (
            <tr key={doctor} style={index % 2 === 0 ? rowStyle : altRowStyle}>
              <td style={cellStyle}>{doctor}</td>
              <td style={cellStyle}>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Styles
const containerStyle = {
  maxWidth: '600px',
  margin: '40px auto',
  padding: '20px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  backgroundColor: '#ffffff',
  fontFamily: 'Arial, sans-serif'
};

const headingStyle = {
  marginBottom: '20px',
  textAlign: 'center',
  fontSize: '24px',
  color: '#333'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const headerCellStyle = {
  borderBottom: '2px solid #ccc',
  padding: '12px',
  backgroundColor: '#f5f5f5',
  fontWeight: 'bold',
  textAlign: 'left',
  color: '#333'
};

const cellStyle = {
  padding: '12px',
  borderBottom: '1px solid #eee',
  textAlign: 'left',
  color: '#555'
};

const rowStyle = {
  backgroundColor: '#fff',
};

const altRowStyle = {
  backgroundColor: '#f9f9f9',
};