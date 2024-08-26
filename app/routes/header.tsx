import React from 'react';

const Header: React.FC = () => (
  <header className="bg-[#FF9999] text-Black py-4 shadow-md">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">NO-EY</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-[#f0e68c]">Home</a></li> 
          <li><a href="/MyPetForm" className="hover:text-[#f0e68c]">Add Pets</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
