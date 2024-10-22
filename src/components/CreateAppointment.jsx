import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaArrowLeft } from 'react-icons/fa'; // Import the left arrow icon

const CreateAppointment = () => {
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleCardClick = (type) => {
    // Navigate to the respective consultation page based on the type
    if (type === 'online') {
      navigate('/online-consultation'); // Replace with your online consultation route
    } else {
      navigate('/offline-consultation'); // Replace with your offline consultation route
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex items-center mb-4">
        <FaArrowLeft
          onClick={() => navigate(-1)} // Navigate back on click
          className="text-2xl cursor-pointer mr-2"
        />
        <h1 className="text-2xl font-bold">Create Appointment</h1>
      </div>

      {/* Consultation Cards Section */}
      <h2 className="text-xl font-semibold mb-4">Choose Consultation Type</h2>
      <div className="flex justify-center space-x-4 mb-6 flex-wrap">
        <div 
          className="bg-white rounded-lg shadow-md p-4 flex-shrink-0 w-80 m-2 cursor-pointer" // Increased width
          onClick={() => handleCardClick('online')} // Handle click for Online Consultation
        >
          <div className="flex">
            <img
              src="https://via.placeholder.com/50" // Replace with your image URL
              alt="Online Consultation"
              className="h-10 w-25 rounded-l-lg object-cover"
            />
            <div className="p-4 flex-grow"> {/* Added flex-grow to take up remaining space */}
              <h3 className="text-lg font-semibold">Online Consultation</h3>
            </div>
          </div>
        </div>

        <div 
          className="bg-white rounded-lg shadow-md p-4 flex-shrink-0 w-80 m-2 cursor-pointer" // Increased width
          onClick={() => handleCardClick('offline')} // Handle click for Offline Consultation
        >
          <div className="flex">
            <img
              src="https://via.placeholder.com/50" // Replace with your image URL
              alt="Offline Consultation"
              className="h-10 w-25 rounded-l-lg object-cover"
            />
            <div className="p-4 flex-grow rounded-lg"> {/* Added flex-grow to take up remaining space */}
              <h3 className="text-lg font-semibold">Offline Consultation</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAppointment;
