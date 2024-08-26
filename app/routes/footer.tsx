import React from "react";
import { Link } from 'react-router-dom';

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
        <p>
          <a href="https://www.facebook.com/siriygron.songsalee" target="_blank" rel="noopener noreferrer">Facebook</a>
        </p>
      </div>

    </div>
  );
};

export default Footer;
