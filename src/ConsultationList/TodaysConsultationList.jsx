
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../Config/Config';

export default function TodaysConsultationList() {
  const [formData, setFormData] = useState({
    patientName: '',
    consultationNotes: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'consultations'), {
        patientName: formData.patientName,
        consultationNotes: formData.consultationNotes,
        createdAt: new Date()
      });
      setSuccess(true);
      setFormData({ patientName: '', consultationNotes: '' });
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Optional scroll
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      alert('Error saving consultation: ' + error.message);
    }
  };

  return (
    <>
      {/* Fade-in animation style */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        style={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url('https://img.freepik.com/free-photo/health-still-life-with-copy-space_23-2148854034.jpg?semt=ais_hybrid&w=740')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.5)',
            zIndex: 1
          }}
        />

        {/* Form Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            style={{
              maxWidth: '500px',
              width: '100%',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              color: '#000'
            }}
          >
            <h2 style={{ textAlign: 'center', color: '#fff' }}>Today's Consultation</h2>

            {/* Success message */}
            {success && (
              <div
                style={{
                  color: '#388e3c',
                  background: '#e8f5e9',
                  borderRadius: 8,
                  padding: 10,
                  marginBottom: 15,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  animation: 'fadeIn 0.5s ease-in-out'
                }}
              >
                ✅ Consultation added successfully!
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontWeight: 'bold', color: '#fff' }}>Patient Name:</label>
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
                    border: '2px solid #ffffff',
                    borderRadius: '8px',
                    outline: 'none',
                    fontSize: '16px',
                    background: 'rgba(255,255,255,0.8)'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontWeight: 'bold', color: '#fff' }}>Consultation Notes:</label>
                <textarea
                  name="consultationNotes"
                  value={formData.consultationNotes}
                  onChange={handleChange}
                  rows="4"
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginTop: '5px',
                    border: '2px solid #ffffff',
                    borderRadius: '8px',
                    outline: 'none',
                    fontSize: '16px',
                    resize: 'vertical',
                    background: 'rgba(255,255,255,0.8)'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#336499',
                  color: '#fff',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'background 0.3s'
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#2a4f77')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#336499')}
              >
                Save Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

