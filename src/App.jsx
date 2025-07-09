import React, { useState, useEffect } from 'react';
import Login from './Login';
import Register from './Register';
import ProtectedPage from './ProtectedPage';
import ResumeUpload from './ResumeUpload';

function App() {
  // Track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // Check for token on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  // Show register or login form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-blue-700 mb-2 text-center">AI Job Application Assistant</h1>
          <p className="mb-6 text-center text-gray-600">Welcome! This app helps you generate cover letters, rewrite resume lines, and manage your job applications using AI.</p>
          {showRegister ? (
            <>
              <Register onRegister={() => setShowRegister(false)} />
              <button className="mt-2 text-blue-500 underline w-full" onClick={() => setShowRegister(false)}>
                Already have an account? Login
              </button>
            </>
          ) : (
            <>
              <Login onLogin={() => setIsLoggedIn(true)} />
              <button className="mt-2 text-blue-500 underline w-full" onClick={() => setShowRegister(true)}>
                New user? Register
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  // If logged in, show protected content, resume upload, and logout button
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Welcome!</h1>
        <button className="mb-4 bg-red-500 text-white px-4 py-2 rounded" onClick={handleLogout}>Logout</button>
        <ResumeUpload />
        <ProtectedPage />
      </div>
    </div>
  );
}

export default App;
