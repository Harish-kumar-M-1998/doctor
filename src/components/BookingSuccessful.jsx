import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const BookingSuccessful = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Replace with your desired home route
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-lg text-center">
        <FaCheckCircle className="text-green-500 text-4xl mb-4" />
        <h1 className="text-2xl font-bold mb-2">Booking Successful!</h1>
        <p className="text-lg mb-4">Your appointment has been successfully booked.</p>

        {/* Booking Summary */}
        <h2 className="text-lg font-semibold mb-2">Booking Summary</h2>
        <p><strong>Date:</strong> 2024-10-23</p> {/* Replace with dynamic data */}
        <p><strong>Time:</strong> 10:00 AM</p> {/* Replace with dynamic data */}
        <p><strong>Patient:</strong> John Doe</p> {/* Replace with dynamic data */}
        <p><strong>Problem:</strong> Headache</p> {/* Replace with dynamic data */}

        {/* Button to go home or book again */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handleGoHome}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccessful;
