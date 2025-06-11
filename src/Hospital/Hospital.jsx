import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Shared Styles
const headingStyle = {
  color: '#fff',
  fontSize: '22px',
  marginBottom: '18px',
  fontFamily: 'Georgia, serif',
  fontWeight: 700,
  letterSpacing: '1px',
  background: 'linear-gradient(90deg, #145252 40%,#145252 100%)',
  padding: '6px 16px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
};

const listStyle = {
  listStyleType: 'none',
  paddingLeft: 0,
  lineHeight: '2',
  fontSize: '16.5px',
  color: '#f1f1f1',
  margin: 0
};

const listItemStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '3px',
  padding: '3px 0',
  borderBottom: '1px solid rgba(255,255,255,0.08)'
};

const bulletStyle = {
  display: 'inline-block',
  width: '10px',
  height: '10px',
  marginRight: '12px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #00e6b8 60%, #009985 100%)',
  boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
};

export default function Hospital() {
  const navigate = useNavigate();

  // Map search state
  const [mapQuery, setMapQuery] = useState('');
  const [mapSrc, setMapSrc] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0000000000005!2d76.271083!3d11.552000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5f1e5b6b6b6b7%3A0x123456789abcdef!2sApollo%20Medical%20College!5e0!3m2!1sen!2sin!4v1718100000000"
  );

  const handleMapSearch = (e) => {
    e.preventDefault();
    if (mapQuery.trim()) {
      const query = encodeURIComponent(mapQuery.trim());
      setMapSrc(`https://www.google.com/maps?q=${query}&output=embed`);
    }
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', lineHeight: '1.6', color: '#333' }}>
      {/* Text Animation Styles and Button Hover Styles */}
      <style>
{`
  @keyframes shimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .custom-btn {
    background: linear-gradient(90deg,  #29a3a3 40%,   #29a3a3 100%);
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 28px;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    letter-spacing: 1px;
    transition: background 0.2s, transform 0.2s;
  }
  .custom-btn:hover {
    background: linear-gradient(90deg, #196666 40%,   #196666  100%);
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 4px 16px rgba(102,102,153,0.18);
  }
`}
</style>

      {/* Welcome Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '30px',
        background: 'linear-gradient(135deg,  #46d2d2, #adebeb)',
        borderRadius: '15px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        marginBottom: '0px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
          {/* Logo */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-y52L2yZjET2J4y6qCZyRG_C2QjzDy50pA&s=10"
            alt="Apollo Logo"
            style={{
              width: '70px',
              height: '70px',
              marginRight: '25px',
              borderRadius: '50%',
              objectFit: 'contain',
              boxShadow: '0 0 10px rgba(71, 71, 107, 0.3)',
            }}
          />

          {/* Title & Subtext */}
          <div>
            <div
              style={{
                fontSize: '20px',
                color: '#444',
                fontStyle: 'italic',
                marginBottom: '4px',
                fontFamily: 'Georgia, serif',
              }}
            >
              Welcome to
            </div>

            <div
              style={{
                fontSize: '32px',
                fontWeight: 'bold',
                backgroundImage: 'linear-gradient(to right, #47476b, #8585ad, #47476b)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                animation: 'shimmer 5s infinite ease-in-out',
              }}
            >
              Apollo Medical College
            </div>

            {/* Optional Tagline */}
            <div style={{ fontSize: '16px', marginTop: '6px', color: '#666' }}>
              Nurturing Excellence in Healthcare & Education Since 2001
            </div>

            {/* Optional Badge or Icon */}
            <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  padding: '4px 10px',
                  backgroundColor: '#e1e1f0',
                  color: '#333',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                NABH Accredited
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#4CAF50"
                viewBox="0 0 24 24"
              >
                <path d="M20.285 6.709l-11.998 11.997-5.288-5.285 1.414-1.414 3.874 3.872 10.584-10.584z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Buttons on the right */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end' }}>
          <button
            onClick={() => navigate('/')}
            className="custom-btn"
            style={{ minWidth: 120 }}
          >
            Home
          </button>
          <button
            onClick={() => navigate('/gallery')}
            className="custom-btn"
            style={{ minWidth: 120 }}
          >
            Gallery
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <div style={{ backgroundColor: '#196666', padding: '60px 0' }}>
        <div style={{
          maxWidth: '1100px',
          margin: 'auto',
          padding: '0 40px',
          display: 'flex',
          flexDirection: 'row',
          gap: '50px',
          alignItems: 'center'
        }}>
          {/* Image */}
          <div style={{ flex: '0 0 350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="https://img.freepik.com/free-photo/close-up-health-worker_23-2149112510.jpg"
              alt="Doctor"
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                borderRadius: '14px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            />
          </div>

          {/* About Text */}
          <div style={{ flex: 1, color: '#fff' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>About Us</h2>
            <p>Being a medical teacher long back, it was my earnest wish to have the opportunity to train future doctors...</p>
            <p>Apart from churning out medical graduates, the attached Medical College Hospital is providing high-quality treatment to a large number of patients in the hilly and tribal district of Wayanad. The hospital has become the most preferred referral destination for other doctors and hospitals in the district and has served and saved millions of patients. The institution also provides meaningful employment to thousands of people mostly from the local population.
            </p>
            <p> The establishment of the large campus with other courses like Nursing and Pharmacy around the Medical College Hospital has transformed the socio-economic status of the Meppadi region while providing training to doctors, nurses, and paramedics for the country.
            </p>
            <p>The vision of Apollo Medical college is to become one of the best 10 private medical colleges in the country in the near future. Looking at various aspects including the starting of postgraduate courses along with Research and Innovation in various areas, I am sure that we will be able to achieve this goal. The committed and passionate support given by the faculty, students and parents to the institution is highly appreciated. Let us all drive forward to achieve the shared dream of taking Apollo Medical College to the pinnacle of medical education in the country.</p>
            <p><strong>Dr. James</strong><br />Founder & Chairman<br />Apollo Medical College</p>
          </div>
        </div>
      </div>

      {/* Map Location Section with Search */}
      <div style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '40px auto',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '24px',
          color: '#145252',
          margin: '0 0 18px 0',
          fontWeight: 700,
          letterSpacing: '1px'
        }}>
          Find Us On Map
        </h2>
        {/* Search Bar */}
        <form
          onSubmit={handleMapSearch}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '18px',
            gap: '10px'
          }}
        >
          <input
            type="text"
            placeholder="Search a place..."
            value={mapQuery}
            onChange={e => setMapQuery(e.target.value)}
            style={{
              padding: '8px 14px',
              fontSize: '16px',
              borderRadius: '6px',
              border: '1px solid #b2dfdb',
              width: '280px'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '8px 18px',
              fontSize: '16px',
              borderRadius: '6px',
              border: 'none',
              background: 'linear-gradient(90deg, #009985 40%, #005bac 100%)',
              color: '#fff',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Search
          </button>
        </form>
        <iframe
          title="Apollo Medical College Location"
          src={mapSrc}
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
        
        {/* Awards & Accreditations Section */}
      <div style={{
        maxWidth: '1100px',
        margin: '40px auto',
        background: '#f7fafc',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '36px 24px 28px 24px'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '24px',
          color: '#145252',
          marginBottom: '24px',
          fontWeight: 700,
          letterSpacing: '1px'
        }}>
          Awards & Accreditations
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '36px'
        }}>
          {/* Example Award 1 */}
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            padding: '18px 28px',
            minWidth: '220px',
            textAlign: 'center'
          }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
              alt="NABH"
              style={{ width: 54, marginBottom: 10 }}
            />
            <div style={{ fontWeight: 600, color: '#196666', fontSize: 17 }}>NABH Accreditation</div>
            <div style={{ color: '#666', fontSize: 14, marginTop: 4 }}>National Accreditation Board for Hospitals</div>
          </div>
          {/* Example Award 2 */}
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            padding: '18px 28px',
            minWidth: '220px',
            textAlign: 'center'
          }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
              alt="Best Medical College"
              style={{ width: 54, marginBottom: 10 }}
            />
            <div style={{ fontWeight: 600, color: '#196666', fontSize: 17 }}>Best Private Medical College 2023</div>
            <div style={{ color: '#666', fontSize: 14, marginTop: 4 }}>Awarded by Indian Medical Association</div>
          </div>
          {/* Example Award 3 */}
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            padding: '18px 28px',
            minWidth: '220px',
            textAlign: 'center'
          }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="ISO"
              style={{ width: 54, marginBottom: 10 }}
            />
            <div style={{ fontWeight: 600, color: '#196666', fontSize: 17 }}>ISO 9001:2015 Certified</div>
            <div style={{ color: '#666', fontSize: 14, marginTop: 4 }}>Quality Management System</div>
          </div>
        </div>
      </div>

      {/* Footer Info Section */}
      <div style={{ padding: '60px 40px', backgroundColor: '   #0f3d3d' }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '40px',
          flexWrap: 'nowrap',
          overflowX: 'auto',
        }}>
          {/* Logo */}
          <div style={{ minWidth: 100 }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-y52L2yZjET2J4y6qCZyRG_C2QjzDy50pA&s=10"
              alt="Apollo Logo"
              style={{ width: '60%', height: 'auto', objectFit: 'contain', paddingRight: '10px' }}
            />
          </div>

          {/* Sections */}
          <div style={{ minWidth: 200 }}>
            <h2 style={headingStyle}>Departments</h2>
            <ul style={listStyle}>
              {['Casualty', 'Anaesthetics', 'Cardiology', 'Critical Care', 'Pediatrics', 'Gynaecology', 'Neurology', 'Ophthalmology', 'Orthopedics', 'Psychiatry'].map(dept => (
                <li key={dept} style={listItemStyle}><span style={bulletStyle}></span>{dept}</li>
              ))}
            </ul>
          </div>

          <div style={{ minWidth: 200 }}>
            <h2 style={headingStyle}>Institutions</h2>
            <ul style={listStyle}>
              {['Apollo Medical College', 'Apollo College of Pharmacy', 'Apollo College of Nursing'].map(inst => (
                <li key={inst} style={listItemStyle}><span style={bulletStyle}></span>{inst}</li>
              ))}
            </ul>
          </div>

          <div style={{ minWidth: 200 }}>
            <h2 style={headingStyle}>Services</h2>
            <ul style={listStyle}>
              {['Primary Health Care', 'Critical Care', 'Modern Medical Lab', 'Cancer', 'Pregnancy Delivery', 'Dialysis'].map(service => (
                <li key={service} style={listItemStyle}><span style={bulletStyle}></span>{service}</li>
              ))}
            </ul>
          </div>

          <div style={{ minWidth: 200 }}>
            <h2 style={headingStyle}>Contact Us</h2>
            <ul style={listStyle}>
              {[
                'GF-C-284, Manglam Building',
                'Near 8 No, Chauraha, Nirala Nagar, Lucknow',
                'care@indiahospiotal.in',
                '(+91) 911 999 9070',
                '0522-4005300'
              ].map(contact => (
                <li key={contact} style={listItemStyle}><span style={bulletStyle}></span>{contact}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}