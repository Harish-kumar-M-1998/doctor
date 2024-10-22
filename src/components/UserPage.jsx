import React from 'react';
import { FaBell, FaUser, FaUserMd, FaCalendarPlus, FaFileAlt, FaHome, FaDatabase } from 'react-icons/fa'; // Importing icons
import { Link } from 'react-router-dom';

const UserPage = ({ username }) => {
  // Service data with images and titles
  const services = [
    {
      img: 'https://via.placeholder.com/300x150?text=Find+a+Doctor',
      title: 'Find a Doctor',
    },
    {
      img: 'https://via.placeholder.com/300x150?text=Book+Lab+Test',
      title: 'Book Lab Test',
    },
    {
      img: 'https://via.placeholder.com/300x150?text=Health+Tracker',
      title: 'Health Tracker',
    },
    {
      img: 'https://via.placeholder.com/300x150?text=Consultation',
      title: 'Consultation',
    },
    {
      img: 'https://via.placeholder.com/300x150?text=Wellness+Program',
      title: 'Wellness Program',
    },
    {
      img: 'https://via.placeholder.com/300x150?text=Wellness+Program',
      title: 'Wellness Program',
    },
    {
      img: 'https://via.placeholder.com/300x150?text=Wellness+Program',
      title: 'Wellness Program',
    },
  ];

  // Quick Access data
  const quickAccess = [
    {
      title: 'My Doctors',
      img: 'https://via.placeholder.com/150?text=My+Doctors',
    },
    {
      title: 'Create Appointment',
      img: 'https://via.placeholder.com/150?text=Create+Appointment',
    },
    {
      title: 'My Reports',
      img: 'https://via.placeholder.com/150?text=My+Reports',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Hi, {username}</h1>
        <div className="flex space-x-4">
          <FaBell className="text-2xl cursor-pointer" />
          <FaUser className="text-2xl cursor-pointer" />
        </div>
      </div>

      {/* Card Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Individual Plan</h2>
          <img
            src="https://via.placeholder.com/50" // Replace with your image
            alt="Plan"
            className="h-12 w-12"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Subheading about the individual plan goes here. This is a brief description that highlights the plan's features.
        </p>
        <a href="#" className="text-blue-500 hover:underline">
          Know Your Benefits 
        </a>
      </div>

      {/* Services Section */}
      <h2 className="text-xl font-semibold mb-2">Our Services</h2>
      <div
        className="flex space-x-4 pb-4 overflow-x-auto"
        style={{
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* IE and Edge */
        }}
      >
        {/* Hide scrollbar for Chrome, Safari, and Opera */}
        <style>
          {`
            .flex::-webkit-scrollbar {
              display: none; /* Hide scrollbar */
            }
          `}
        </style>
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex-shrink-0 w-48 lg:w-60">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-auto rounded-lg mb-2"
            />
            <h3 className="text-lg font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>

      {/* Health Checkup Card Section */}
      <div className="bg-white rounded-lg shadow-md p-6 flex items-start mb-6">
        {/* Left Side: Checkup Details */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Book Annual Health Checkups</h2>
          <ul className="grid grid-cols-2 gap-2 mb-4">
            <li className="text-gray-700">Diabetes</li>
            <li className="text-gray-700">Thyroid</li>
            <li className="text-gray-700">Heart</li>
            <li className="text-gray-700">Kidney</li>
          </ul>
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Book Now
          </a>
        </div>

        {/* Right Side: Image */}
        <img
          src="https://via.placeholder.com/150" // Replace with your image
          alt="Health Checkup"
          className="h-32 w-32 ml-4"
        />
      </div>

      {/* Quick Access Section */}
      <h2 className="text-xl font-semibold mb-2">Quick Access</h2>
<div className="flex justify-center space-x-2 mb-6 flex-wrap">
  {quickAccess.map((item, index) => (
    <div key={index} className="bg-white rounded-lg shadow-md p-2 flex-shrink-0 w-40 m-2">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-auto rounded-lg mb-1"
      />
      <h3 className="text-md font-semibold text-center">
        {item.title === 'Create Appointment' ? (
          <Link to="/create-appointment" className="text-blue-500 hover:underline">{item.title}</Link>
        ) : (
          item.title
        )}
      </h3>
    </div>
  ))}
</div>


      {/* Navigation Bar */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex justify-around space-x-6">
          <a href="#" className="flex flex-col items-center text-blue-500 hover:underline">
            <FaHome className="text-xl" />
            Home
          </a>
          <a href="#" className="flex flex-col items-center text-blue-500 hover:underline">
            <FaDatabase className="text-xl" />
            Records
          </a>
          <a href="#" className="flex flex-col items-center text-blue-500 hover:underline">
            <FaCalendarPlus className="text-xl" />
            Devices
          </a>
          <a href="#" className="flex flex-col items-center text-blue-500 hover:underline">
            <FaUserMd className="text-xl" />
            Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
