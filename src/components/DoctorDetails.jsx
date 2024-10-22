import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams for getting doctor ID
import { FaArrowLeft, FaHeart } from 'react-icons/fa'; // Import icons

const DoctorDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get doctor ID from URL

  // Sample doctor data (Replace this with actual data fetching logic)
  const doctor = {
    id: 1,
    name: 'Dr. John Smith',
    specialty: 'General Doctor',
    rating: 4.5,
    reviews: 25,
    experience: '10 years',
    languages: ['English', 'Tamil'],
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    introduction: 'Dr. John Smith is a highly qualified general practitioner with over 10 years of experience in the field.',
    specializationPoints: [
      'Expert in treating common illnesses',
      'Experience in preventive care',
      'Skilled in patient management',
    ],
    councilRegistration: 'Tamil Nadu Medical Council 2012',
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex items-center mb-4">
        <FaArrowLeft
          onClick={() => navigate(-1)} // Navigate back on click
          className="text-2xl cursor-pointer mr-2"
        />
        <h1 className="text-2xl font-bold">Doctor Details</h1>
      </div>

      {/* Doctor Image and Favorite Icon */}
      <div className="relative mb-4 flex justify-center">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-40 w-40 rounded-full object-cover"
        />
        <FaHeart className="absolute top-2 right-2 text-red-500 cursor-pointer" />
      </div>

      {/* Doctor Name, Specialty, Rating, and Reviews */}
      <div className="flex justify-between mb-4 flex-col md:flex-row">
        <div>
          <h2 className="text-xl font-semibold">{doctor.name}</h2>
          <p className="text-gray-700">{doctor.specialty}</p>
        </div>
        <div className="text-left">
          <p className="font-semibold">{doctor.rating} ⭐ | {doctor.reviews} reviews</p>
        </div>
      </div>

      {/* Introduction */}
      <h3 className="text-lg font-semibold mb-2">Introduction</h3>
      <p className="text-gray-700 mb-4">{doctor.introduction}</p>

      {/* Specialization as Card */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">Specialization</h3>
        <ul className="list-disc list-inside">
          {doctor.specializationPoints.map((point, index) => (
            <li key={index} className="text-gray-700">{point}</li>
          ))}
        </ul>
      </div>

      {/* Experience and Languages Side by Side */}
      <div className="flex mb-4">
        <div className="bg-gray-200 rounded-lg shadow-md p-4 w-full mr-2">
          <h4 className="font-semibold">Experience</h4>
          <p className="text-gray-700">{doctor.experience}</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-md p-4 w-full">
          <h4 className="font-semibold">Languages</h4>
          <p className="text-gray-700">{doctor.languages.join(', ')}</p>
        </div>
      </div>

      {/* Council Registration */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h4 className="font-semibold">Registration</h4>
        <p className="text-gray-700">{doctor.councilRegistration}</p>
      </div>

      {/* Book Appointment Button */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => navigate('/book-appointment')} // Navigate to booking page
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full max-w-xs"
        >
          Book Appointment
        </button>
      </div>

      {/* Reviews Card */}
      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <h4 className="font-semibold">Reviews</h4>
        <p className="text-gray-700">See reviews from patients...</p>
      </div>
    </div>
  );
};

export default DoctorDetails;
