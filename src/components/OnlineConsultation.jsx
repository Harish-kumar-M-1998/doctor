import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaArrowLeft } from 'react-icons/fa'; // Import the left arrow icon

const OnlineConsultation = () => {
  const navigate = useNavigate(); // Initialize navigate for navigation
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query

  // Sample doctor data with rating
  const doctors = [
    {
      id: 1,
      name: 'Dr. John Smith',
      specialty: 'General Doctor',
      experience: '10 years',
      fee: '$50',
      timing: '9 AM - 5 PM',
      rating: 4.5, // Add rating
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Dr. Jane Doe',
      specialty: 'Pediatrician',
      experience: '8 years',
      fee: '$60',
      timing: '10 AM - 6 PM',
      rating: 4.8, // Add rating
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'Dr. Emily Johnson',
      specialty: 'Cardiologist',
      experience: '12 years',
      fee: '$70',
      timing: '11 AM - 7 PM',
      rating: 4.2, // Add rating
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
  ];

  // Filter doctors based on search query
  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex items-center mb-4">
        <FaArrowLeft
          onClick={() => navigate(-1)} // Navigate back on click
          className="text-2xl cursor-pointer mr-2"
        />
        <h1 className="text-2xl font-bold">Online Consultation</h1>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for doctors..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
        className="w-full p-2 mb-4 border rounded-md"
      />

      {/* Doctor Cards Section */}
      <h2 className="text-xl font-semibold mb-4">Available Doctors</h2>
      <div className="flex flex-wrap justify-center">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div 
              key={doctor.id}
              className="bg-white rounded-lg shadow-md p-4 flex-shrink-0 w-80 m-2"
            >
              <div className="flex">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-20 w-20 rounded-l-lg object-cover"
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold">{doctor.name}</h3>
                  <p className="text-gray-700">{doctor.specialty}</p>
                  <p className="text-gray-500">{doctor.experience}</p>
                  <p className="text-gray-800 font-semibold">{doctor.fee}</p>
                  <p className="text-gray-600">{doctor.timing}</p>
                </div>
              </div>
              {/* Rating Section below the image */}
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">{'★'.repeat(Math.floor(doctor.rating))}</span>
                <span className="text-gray-400">{'★'.repeat(5 - Math.floor(doctor.rating))}</span>
                <span className="ml-2 text-gray-600">({doctor.rating})</span>
              </div>
              {/* Bottom Part of the Card */}
              <div className="flex justify-between mt-4">
                <a
                  onClick={() => navigate(`/doctor/${doctor.id}`)} // Navigate to the doctor details page
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  View Profile
                </a>
                <button
                  onClick={() => navigate('/book-appointment')} // Navigate to booking page
                  className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default OnlineConsultation;
