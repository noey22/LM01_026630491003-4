import React from "react";

const Footer: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#FF9999'
      }}
    >
      <div
        style={{
          marginTop: '10px',
        }}
      >
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>ช่องทางการติดต่อ:</p>
        <p style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="https://www.facebook.com/siriygron.songsalee" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
              alt="Facebook" 
              style={{ width: '50px', height: '50px' }}
            />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
