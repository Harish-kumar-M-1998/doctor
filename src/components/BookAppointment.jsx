import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import styles for the calendar

const BookAppointment = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);

  // Sample data for available slots
  const slotsData = {
    '2024-10-23': ['10:00 AM', '1:00 PM'],
    '2024-10-24': ['11:00 AM', '3:00 PM'],
    '2024-10-25': ['1:00 PM', '4:00 PM'],
    '2024-10-26': ['9:00 AM', '12:00 PM', '5:00 PM'], // Added more sample timings
    '2024-10-27': ['10:30 AM', '2:30 PM'],
    '2024-10-28': ['11:00 AM', '3:00 PM'],
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    const dateString = selectedDate.toISOString().split('T')[0];
    setAvailableSlots(slotsData[dateString] || []);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex items-center mb-4">
        <FaArrowLeft
          onClick={() => navigate(-1)}
          className="text-2xl cursor-pointer mr-2"
        />
        <h1 className="text-2xl font-bold">Book Appointment</h1>
      </div>

      {/* Calendar Component */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Select a Date</h2>
        <Calendar
          onChange={handleDateChange}
          value={date}
          className="border border-gray-300 rounded-lg"
        />
      </div>

      {/* Available Slots */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Available Slots</h2>
        {availableSlots.length > 0 ? (
          <div className="flex flex-wrap">
            {availableSlots.map((slot, index) => (
              <div
                key={index}
                className="bg-blue-500 text-white rounded-md p-2 m-2 cursor-pointer hover:bg-blue-600 transition"
              >
                {slot}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No slots available for this date.</p>
        )}
      </div>

      {/* Continue Button */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => {alert('Appointment booked!')
            navigate('/patient-details')}} // Replace with your logic
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full max-w-xs"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default BookAppointment;
