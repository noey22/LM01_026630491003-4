import type { MetaFunction } from "@remix-run/node";
import React from "react";
import Footer from "./footer";
import Header from "./header";

const App: React.FC= () => { 
  return [
    <>
    <div className="flex flex-col min-h-screen">
    <Header/>
      <main className="flex-grow py-8 px-4 bg-[#FFFFFF]">
      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#FFFFFF'
      }}
    >
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
      <h1>ชื่อ:สิริยากรณ์ ส่งสาลี</h1>
      <p>รหัสนักศึกษา: 026630491003-4</p>
      <p>อีเมล: siriykorn.son@rmutto.ac.th</p>
    </div>
      </main>
    <Footer />
    </div>
    </>
    
  ];
};

export default App;
