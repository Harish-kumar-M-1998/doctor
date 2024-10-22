import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Login from './components/Login';
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import UserPage from './components/UserPage';
import CreateAppointment from './components/CreateAppointment';
import OnlineConsultation from './components/OnlineConsultation';
import DoctorDetails from './components/DoctorDetails';
import BookAppointment from './components/BookAppointment';
import PatientDetails from './components/PatientDetails';
import BookingSuccessful from './components/BookingSuccessful';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<UserPage />} />
         <Route path="/create-appointment" element={<CreateAppointment />} />
         <Route path="/online-consultation" element={<OnlineConsultation />} />
         <Route path="/doctor/:id" element={<DoctorDetails />} />
         <Route path="/book-appointment" element={<BookAppointment />} />
         <Route path="/patient-details" element={<PatientDetails />} />
         <Route path="/booking-successful" element={<BookingSuccessful />} />
      </Routes>
    </Router>
  );
}

export default App;
