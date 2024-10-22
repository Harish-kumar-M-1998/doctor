import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const patientsData = [
    { id: 1, name: 'John Doe', relation: 'Brother', dob: '1990-05-15', age: 34, email: 'john@example.com', sex: 'Male' },
    { id: 2, name: 'Jane Smith', relation: 'Sister', dob: '1995-08-25', age: 29, email: 'jane@example.com', sex: 'Female' },
    { id: 3, name: 'Emily Johnson', relation: 'Mother', dob: '1985-11-05', age: 38, email: 'emily@example.com', sex: 'Female' },
    // Add more patient data as needed
];

const PatientDetails = () => {
    const navigate = useNavigate();
    const [selectedPatient, setSelectedPatient] = useState('');
    const [patientDetails, setPatientDetails] = useState(null);
    const [problem, setProblem] = useState('');

    const handlePatientChange = (event) => {
        const patientId = parseInt(event.target.value);
        const patient = patientsData.find(p => p.id === patientId);
        setSelectedPatient(patientId);
        setPatientDetails(patient);
    };

    const handleContinue = () => {
        // Here you can implement any logic needed before navigating
        if (patientDetails) {
            // If necessary, you could pass the details as state
            navigate('/booking-successful', { state: { patientDetails, problem } });
        } else {
            alert('Please select a patient.');
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Header Section */}
            <div className="flex items-center mb-4">
                <FaArrowLeft
                    onClick={() => navigate(-1)}
                    className="text-2xl cursor-pointer mr-2"
                />
                <h1 className="text-2xl font-bold">Patient Details</h1>
            </div>

            <h1 className='text-lg font-bold mb-2'>Choose Patient</h1>
            <div className="rounded-lg p-4 mb-4">
                <h2 className="text-lg font-semibold mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    Who are you booking an appointment for?
                </h2>

                <select
                    value={selectedPatient}
                    onChange={handlePatientChange}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                >
                    <option value="">Select a patient</option>
                    {patientsData.map((patient) => (
                        <option key={patient.id} value={patient.id}>
                            {patient.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Patient Details Card */}
            {patientDetails && (
                <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                    <h3 className="text-lg font-semibold mb-2">{patientDetails.name}</h3>
                    <p><strong>Relation:</strong> {patientDetails.relation}</p>
                    <p><strong>DOB:</strong> {patientDetails.dob}</p>
                    <p><strong>Age:</strong> {patientDetails.age}</p>
                    <p><strong>Email:</strong> {patientDetails.email}</p>
                    <p><strong>Sex:</strong> {patientDetails.sex}</p>
                </div>
            )}

            {/* Problem Text Area */}
            <div className="p-4 mb-4">
                <textarea
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 w-full h-24"
                    placeholder="Write your problem here..."
                />
            </div>

            {/* Continue Button */}
            <div className="flex justify-center mb-4">
                <button
                    onClick={handleContinue}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full max-w-xs"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default PatientDetails;
