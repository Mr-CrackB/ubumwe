import React, { useState } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Dashboard from "./pages/dashboard";

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistrationSuccess = () => {
    alert("Registration successful! Redirecting to your dashboard...");
    setIsRegistered(true);
  };

  return (
    <div className="app-container">
      {isRegistered ? (
        <>
          <Sidebar />
          <div className="main-section">
            <Navbar />
            <Dashboard />
          </div>
        </>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
          <RegisterForm onSuccess={handleRegistrationSuccess} />
        </div>
      )}
    </div>
  );
};

export default App;
