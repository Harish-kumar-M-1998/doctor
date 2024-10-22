import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaKey } from 'react-icons/fa'; // Import user and key icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [corporateName, setCorporateName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        corporateName,
        email,
        password,
      });
      alert('Login successful!');
      // Navigate to the user page on successful login
      navigate('/user'); 
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-8 space-y-6">
        {/* Logo or Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/150"  // Replace with your image URL
            alt="Health Desk Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">Health Desk</h1>

        {/* Subheading and Welcome Text */}
        <h2 className="text-xl text-center text-gray-500">Corporate Login</h2>
        <p className="text-md text-center text-gray-400">Hi, Welcome Back</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Corporate Name Field */}
          <div>
            <label className="block text-gray-700">Corporate Name</label>
            <div className="flex items-center border rounded-md">
              <span className="p-2">
                <FaUser className="text-gray-500" /> {/* User Icon */}
              </span>
              <input
                type="text"
                value={corporateName}
                onChange={(e) => setCorporateName(e.target.value)}
                className="w-full px-4 py-2 border-l rounded-r-md focus:outline-none"
                placeholder="Enter corporate name"
                required
              />
            </div>
          </div>

          {/* Email/Username Field */}
          <div>
            <label className="block text-gray-700">Username</label>
            <div className="flex items-center border rounded-md">
              <span className="p-2">
                <FaUser className="text-gray-500" /> {/* User Icon */}
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border-l rounded-r-md focus:outline-none"
                placeholder="Enter username"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700">Password</label>
            <div className="flex items-center border rounded-md">
              <span className="p-2">
                <FaKey className="text-gray-500" /> {/* Key Icon */}
              </span>
              <input
                type={showPassword ? 'text' : 'password'} // Toggle password visibility
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border-l rounded-r-md focus:outline-none"
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                className="px-4 py-2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full py-2 text-white bg-violet-500 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
