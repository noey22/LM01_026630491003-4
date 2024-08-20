import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="profile-container">
       
      <img
        src="./images/ชินจัง.jpg"
        alt="Profile"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '10px',
        }}
      />
      <h1>ชื่อ: สิริยากรณ์ ส่งสาลี</h1>
      <p>รหัสนักศึกษา: 026630491003-4</p>
      <p>อีเมล: siriykorn.son@rmutto.ac.th</p>
      <div className="contact-links">
        <p>ช่องทางการติดต่อ:</p>
        <p>
          <a href="https://www.facebook.com/nathapol" target="_blank"> Facebook
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/nathapol" target="_blank">LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

 
    
