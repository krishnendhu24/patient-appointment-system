import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Gallery() {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imgUrl) => {
    setSelectedImage(imgUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    background: 'linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%)',
    padding: '36px 20px',
    borderRadius: '18px',
    boxShadow: '0 10px 32px rgba(0, 0, 0, 0.10)',
    margin: '40px auto 28px auto',
    maxWidth: '950px',
    animation: 'fadeIn 1.2s ease-in-out',
    position: 'relative',
    overflow: 'hidden',
  };

  const headingStyle = {
    fontFamily: '"Pacifico", cursive',
    fontSize: '34px',
    color: '#005fa3',
    margin: 0,
    textShadow: '2px 2px 8px rgba(0,0,0,0.08)',
    letterSpacing: '1px'
  };

  const logoStyle = {
    width: '70px',
    height: '70px',
    objectFit: 'cover',
    borderRadius: '16px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.13)',
    border: '3px solid #fff',
    background: '#fff'
  };

  const homeBtnStyle = {
    position: 'absolute',
    right: '28px',
    top: '50px',
    background: 'linear-gradient(90deg,   #9fb1e0 40%,  #9fb1e0 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 22px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    letterSpacing: '1px',
    transition: 'background 0.2s, transform 0.2s'
  };

  const sectionHeadingStyle = {
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: '700',
    color: '#0077cc',
    fontFamily: '"Segoe UI", sans-serif',
    marginTop: '38px',
    marginBottom: '16px',
    letterSpacing: '1px',
    textShadow: '0 2px 8px rgba(0,0,0,0.08)',
    position: 'relative'
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '28px',
    padding: '24px',
    maxWidth: '1100px',
    margin: 'auto',
    background: 'rgba(255,255,255,0.7)',
    borderRadius: '18px',
    boxShadow: '0 6px 24px rgba(0,0,0,0.07)'
  };

  const imageBoxStyle = {
    borderRadius: '14px',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.13)',
    transition: 'transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s',
    background: '#fff'
  };

  const imageStyle = {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    transition: 'transform 0.3s cubic-bezier(.4,2,.6,1), filter 0.3s',
    filter: 'brightness(0.97) saturate(1.1)',
    cursor: 'zoom-in'
  };

  const styleTag = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(40px);}
      to { opacity: 1; transform: translateY(0);}
    }
    .gallery-image-box:hover img {
      transform: scale(1.07);
      filter: brightness(1.07) saturate(1.2);
    }
    .gallery-image-box:hover {
      box-shadow: 0 12px 32px rgba(0, 123, 255, 0.18), 0 2px 8px rgba(0,0,0,0.08);
      z-index: 2;
    }
    .gallery-section-heading:after {
      content: '';
      display: block;
      margin: 8px auto 0 auto;
      width: 60px;
      height: 4px;
      border-radius: 2px;
      background: linear-gradient(90deg, #009985 40%, #005bac 100%);
      opacity: 0.7;
    }
    .gallery-home-btn:hover {
      background: linear-gradient(90deg, #ff9800 40%, #ff5722 100%);
      transform: translateY(-2px) scale(1.04);
      box-shadow: 0 4px 16px rgba(102,102,153,0.18);
    }
  `;

  // Images with captions
  const campusImages = [
    {
      url: 'https://img.freepik.com/free-photo/modern-amphitheater-usa_1268-14358.jpg?semt=ais_hybrid&w=740',
      caption: 'Main College Amphitheater'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09We_A2K72VrTKz3sTlafUyRaVcpFbF8sEvLAANSZaYyKyuCCnWU_EtjQiiEpg5g_vcM&usqp=CAU',
      caption: 'Academic Block'
    },
    {
      url: 'https://img.freepik.com/free-photo/nobody-scientific-laboratory-with-research-instruments_482257-19303.jpg?semt=ais_hybrid&w=740',
      caption: 'Science Laboratory'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8H7GMd2zs9s3avSRB-HgZ49SoJEEjs5UntQ&s',
      caption: 'Library Hall'
    },
    {
      url: 'https://i.pinimg.com/736x/4d/ea/8f/4dea8fe4c6cf09daef2973d7a0af6a87.jpg',
      caption: 'Classroom'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKqPqgrugD8-xQbC70Upbkasm8ISNuZIj3BQRwTB8qIks0umnbwa6hWG2TI9nHF88ynw&usqp=CAU',
      caption: 'Main Auditorium'
    },
    {
      url: 'https://www.shutterstock.com/image-photo/school-yarda-football-field-building-600nw-2396312857.jpg',
      caption: 'Campus Grounds'
    },
  ];

  const hospitalImages = [
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HOOLCkX1_BIngstTcXV2v6T9n6ATws7h-g&s',
      caption: 'Hospital Main Entrance'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGVl0Oj01sQOSzeA7G6D4-YoJQUc1pIrFNJHQ087Qr5kE7nGbzCoGNwnBHjbqbD-4vt8&usqp=CAU',
      caption: 'Emergency Ward'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZVC5m1uFNJqc-kIGcnmktWpjvSM7b9o4Cg&s',
      caption: 'Operation Theater'
    },
    {
      url: '',
      caption: 'ICU'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0qm-jp1Demn5R1wqsCfe-C95QM5NWTyd-Q&s',
      caption: 'Pediatrics Ward'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdK06XJ47mSggSeJHTCfMD8PZl-IgvuuSrdw&s',
      caption: 'Labour room'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnT4AR0veeZ3CwOHyPkBTyQYYTokcl1DFVbg&s',
      caption: 'Dialysis Center'
    },
    {
      url: 'https://imageio.forbes.com/specials-images/imageserve/668c40deae3b86bae62ecc45/Uniting-Expertise--A-Doctor-Nurse-Dialogue-on-a-Challenging-Patient-Case/960x0.jpg?height=472&width=711&fit=bounds',
      caption: 'Doctors'
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(120deg,  #d1daf0 100%, #d1dffa 100%)' }}>
      <style>{styleTag}</style>

      {/* Top Heading with Logo and Home Button */}
      <div style={containerStyle}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-y52L2yZjET2J4y6qCZyRG_C2QjzDy50pA&s=10"
          alt="Logo"
          style={logoStyle}
        />
        <h2 style={headingStyle}>Our Gallery of Campus and Hospital</h2>
        <button
          className="gallery-home-btn"
          style={homeBtnStyle}
          onClick={() => navigate('/hospital')}
        >
          Back
        </button>
      </div>

      {/* Campus Section */}
      <h3 className="gallery-section-heading" style={sectionHeadingStyle}>College Campus</h3>
      <div style={gridContainerStyle}>
        {campusImages.map((img, index) => (
          <div key={index} className="gallery-image-box" style={imageBoxStyle}>
            <img
              src={img.url}
              alt={img.caption}
              style={imageStyle}
              onClick={() => openImage(img.url)}
            />
            <div style={{
              padding: '8px 12px',
              background: 'rgba(255,255,255,0.92)',
              color: '#005fa3',
              fontSize: '15px',
              fontWeight: 500,
              textAlign: 'center'
            }}>
              {img.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Hospital Section */}
      <h3 className="gallery-section-heading" style={sectionHeadingStyle}>Hospital</h3>
      <div style={gridContainerStyle}>
        {hospitalImages.map((img, index) => (
          <div key={index} className="gallery-image-box" style={imageBoxStyle}>
            <img
              src={img.url}
              alt={img.caption}
              style={imageStyle}
              onClick={() => openImage(img.url)}
            />
            <div style={{
              padding: '8px 12px',
              background: 'rgba(255,255,255,0.92)',
              color: '#005fa3',
              fontSize: '15px',
              fontWeight: 500,
              textAlign: 'center'
            }}>
              {img.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          onClick={closeImage}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'zoom-out'
          }}
        >
          <img
            src={selectedImage}
            alt="Fullscreen View"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(255,255,255,0.2)'
            }}
          />
        </div>
      )}
    </div>
  );
}