import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import PetDetails from './MyPetList($p)'; // คอมโพเนนต์สำหรับแสดงรายละเอียดสัตว์เลี้ยง

const MyPetForm: React.FC = () => {
  // State variables
  const [petName, setPetName] = useState(''); // ชื่อสัตว์เลี้ยง
  const [petBirthDate, setPetBirthDate] = useState(''); // วันเกิดของสัตว์เลี้ยง
  const [petType, setPetType] = useState('Other'); // ประเภทของสัตว์เลี้ยง
  const [petGender, setPetGender] = useState('Male'); // เพศของสัตว์เลี้ยง
  const [petDescription, setPetDescription] = useState(''); // คำบรรยายของสัตว์เลี้ยง
  const [ownerName, setOwnerName] = useState(''); // ชื่อเจ้าของ
  const [ownerEmail, setOwnerEmail] = useState(''); // อีเมลของเจ้าของ
  const [petImage, setPetImage] = useState<string | ArrayBuffer | null>(null); // รูปภาพของสัตว์เลี้ยง
  const [showDetails, setShowDetails] = useState(false); // ใช้เพื่อแสดงรายละเอียดสัตว์เลี้ยงหลังจากส่งแบบฟอร์ม
  // State สำหรับเก็บข้อความ error
  const [errors, setErrors] = useState({
    petName: '',
    petBirthDate: '',
    petType: '',
    petDescription: '',
    ownerName: '',
    ownerEmail: ''
  });

  // ฟังก์ชันสำหรับจัดการการอัพโหลดรูปภาพ
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // ดึงไฟล์จาก input
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPetImage(reader.result); // อัพเดต state ของรูปภาพ
      };
      reader.readAsDataURL(file); // อ่านไฟล์เป็น URL
    }
  };

  // ฟังก์ชันสำหรับจัดการการส่งแบบฟอร์ม
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ
    if (Object.values(errors).every(error => error === '')) {
      setShowDetails(true); // ถ้าไม่มี error ให้แสดงรายละเอียดสัตว์เลี้ยง
    }
  };

  // ฟังก์ชันสำหรับรีเซ็ตฟอร์ม
  const handleReset = () => {
    setPetName('');
    setPetBirthDate('');
    setPetType('Other');
    setPetGender('Male');
    setPetDescription('');
    setOwnerName('');
    setOwnerEmail('');
    setPetImage(null);
    setShowDetails(false);
  };
  return (
    <>
      <Header /> {/* แสดง header */}
      <main>
        {!showDetails ? (
          <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
            <h2 className="text-2xl font-bold mb-4">ข้อมูลสัตว์เลี้ยง</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Pet Name */}
              <div>
                <label htmlFor="petName" className="block text-sm font-medium text-gray-700">
                  Pet Name
                </label>
                <input
                  id="petName"
                  type="text"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm"
                />
                {errors.petName && <p className="mt-2 text-sm text-red-600">{errors.petName}</p>}
              </div>
              {/* Pet Birth Date */}
              <div>
                <label htmlFor="petBirthDate" className="block text-sm font-medium text-gray-700">
                  Pet Birth Date
                </label>
                <input
                  id="petBirthDate"
                  type="date"
                  value={petBirthDate}
                  onChange={(e) => setPetBirthDate(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm"
                />
                {errors.petBirthDate && <p className="mt-2 text-sm text-red-600">{errors.petBirthDate}</p>}
              </div>
              {/* Pet Type */}
              <div>
                <label htmlFor="petType" className="block text-sm font-medium text-gray-700">
                  Pet Type
                </label>
                <select
                  id="petType"
                  value={petType}
                  onChange={(e) => setPetType(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm"
                >
                  <option value="">Select a pet type</option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Rabbit">Rabbit</option>
                  <option value="Other">Other</option>
                </select>
                {errors.petType && <p className="mt-2 text-sm text-red-600">{errors.petType}</p>}
              </div>
              {/* Pet Gender */}
              <fieldset>
                <legend className="block text-sm font-medium text-gray-700">Pet Gender</legend>
                <div className="mt-2 flex space-x-4">
                  <div className="flex items-center">
                    <input
                      id="male"
                      type="radio"
                      name="petGender"
                      value="Male"
                      checked={petGender === 'Male'}
                      onChange={(e) => setPetGender(e.target.value)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label htmlFor="male" className="ml-3 block text-sm font-medium text-gray-700">
                      Male
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="female"
                      type="radio"
                      name="petGender"
                      value="Female"
                      checked={petGender === 'Female'}
                      onChange={(e) => setPetGender(e.target.value)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label htmlFor="female" className="ml-3 block text-sm font-medium text-gray-700">
                      Female
                    </label>
                  </div>
                </div>
              </fieldset>
              {/* Pet Description */}
              <div>
                <label htmlFor="petDescription" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="petDescription"
                  rows={4}
                  value={petDescription}
                  onChange={(e) => setPetDescription(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm"
                ></textarea>
                {errors.petDescription && <p className="mt-2 text-sm text-red-600">{errors.petDescription}</p>}
              </div>
              {/* Owner Name */}
              <h2 className="text-2xl font-bold text-[#555] mb-4">ข้อมูลเจ้าของ</h2>
              <div>
                <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">
                  Owner Name
                </label>
                <input
                  id="ownerName"
                  type="text"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm"
                />
                {errors.ownerName && <p className="mt-2 text-sm text-red-600">{errors.ownerName}</p>}
              </div>
              {/* Owner Email */}
              <div>
                <label htmlFor="ownerEmail" className="block text-sm font-medium text-gray-700">
                  Owner Email
                </label>
                <input
                  id="ownerEmail"
                  type="email"
                  value={ownerEmail}
                  onChange={(e) => setOwnerEmail(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm"
                />
                {errors.ownerEmail && <p className="mt-2 text-sm text-red-600">{errors.ownerEmail}</p>}
              </div>
              {/* Pet Image */}
              <div>
                <label htmlFor="petImage" className="block text-sm font-medium text-gray-700">
                  Pet Image
                </label>
                <input
                  id="petImage"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              {/* Submit and Reset Buttons */}
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        ) : (
          // แสดงรายละเอียดสัตว์เลี้ยงถ้าส่งแบบฟอร์มสำเร็จ
          <PetDetails
            petName={petName}
            petType={petType}
            petGender={petGender}
            petDescription={petDescription}
            ownerName={ownerName}
            petImage={petImage ? String(petImage) : ''}
          />
        )}
      </main>
      <Footer /> {/* แสดง footer */}
    </>
  );
};
export default MyPetForm;
