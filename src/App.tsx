import React, { JSX } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token'); 
    return !!token; 
  };

  return isAuthenticated() ? children : <Navigate to="/" />;
};

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;