import React, { useState } from 'react';

export default function ProtectedPage() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const fetchProtected = async () => {
    setError('');
    setMessage('');
    const token = localStorage.getItem('token');
    try {
      const res = await fetch('/api/protected', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (res.ok) setMessage(data.message);
      else setError(data.error || 'Unauthorized');
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded shadow mt-4">
      <h2 className="text-xl mb-4">Protected Page</h2>
      <button className="bg-purple-500 text-white px-4 py-2 rounded mb-2" onClick={fetchProtected}>Fetch Protected Data</button>
      {message && <div className="text-green-600">{message}</div>}
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}
