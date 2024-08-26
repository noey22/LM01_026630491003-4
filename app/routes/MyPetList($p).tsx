// src/components/PetDetails.tsx
import React from 'react';

// กำหนดประเภทของ props ที่คอมโพเนนต์นี้จะได้รับ
interface PetDetailsProps {
  petName: string;
  petType: string;
  petGender: string;
  petDescription: string;
  ownerName: string;
  petImage?: string; // Optional image URL
}

// รูปภาพเริ่มต้นขนาดใหญ่
const defaultImage = 'https://via.placeholder.com/200';

const PetDetails: React.FC<PetDetailsProps> = ({
  petName,
  petType,
  petGender,
  petDescription,
  ownerName,
  petImage
}) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* หัวข้อของการ์ด */}
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-300 pb-2 text-center">
        Pet Details
      </h2>
      {/* ภาพสัตว์เลี้ยง */}
      <div className="flex items-center justify-center mb-6">
        <div className="w-48 h-48 border border-gray-300 rounded-md overflow-hidden">
          <img
            src={petImage || defaultImage} // ใช้รูปภาพของสัตว์เลี้ยงหรือรูปภาพเริ่มต้น
            alt={petName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* ข้อมูลรายละเอียดของสัตว์เลี้ยง */}
      <div className="space-y-4 text-center">
        <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mx-auto inline-block">
          <p><strong>Name:</strong> {petName}</p>
          <p><strong>Type:</strong> {petType}</p>
          <p><strong>Gender:</strong> {petGender}</p>
          <p><strong>Description:</strong> {petDescription}</p>
          <p><strong>Owner:</strong> {ownerName}</p>
        </div>
      </div>
      {/* ปุ่มย้อนกลับ */}
      <div className="mt-6 text-center">
        <a
          href="/MyPetForm"
          className="inline-block py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-300"
        >
          ย้อนกลับ
        </a>
      </div>
    </div>
  );
};

export default PetDetails;
