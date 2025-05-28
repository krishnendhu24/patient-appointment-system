import React, { useState } from 'react';

export default function TodaysConsultationList() {
  const [formData, setFormData] = useState({
    patientName: '',
    consultationNotes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Consultation:', formData);
    // You can push to database or show a success message here
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '40px auto',
        padding: '30px',
        background: 'linear-gradient(135deg, #e3f2fd, #fce4ec)',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#8080ff' }}>Today's Consultation</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold', color: '#9999ff' }}>Patient Name:</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              border: '2px solid  #9999ff',
              borderRadius: '8px',
              outline: 'none',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold', color: ' #9999ff' }}>Consultation Notes:</label>
          <textarea
            name="consultationNotes"
            value={formData.consultationNotes}
            onChange={handleChange}
            rows="4"
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              border: '2px solid #b3b3ff',
              borderRadius: '8px',
              outline: 'none',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#b3b3ff',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'background 0.3s'
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#4d4dff')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#8080ff')}
        >
          Save Consultation
        </button>
      </form>
    </div>
  );
}
