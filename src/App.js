import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">AI Job Application Assistant</h1>
        <p className="text-gray-700 mb-6">Welcome! This app helps you generate cover letters, rewrite resume lines, and manage your job applications using AI.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Get Started</button>
      </div>
    </div>
  );
}

export default App;
