import React, { useState } from 'react';

export default function ResumeUpload() {
  const [resumeText, setResumeText] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    const token = localStorage.getItem('token');
    try {
      const res = await fetch('/api/resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content: resumeText })
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess('Resume uploaded successfully!');
        setResumeText('');
      } else {
        setError(data.error || 'Failed to upload resume');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow mt-4">
      <h2 className="text-xl mb-4">Upload or Paste Resume</h2>
      <textarea
        className="w-full h-40 p-2 border rounded mb-2"
        placeholder="Paste your resume here..."
        value={resumeText}
        onChange={e => setResumeText(e.target.value)}
        required
      />
      {success && <div className="text-green-600 mb-2">{success}</div>}
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Upload Resume</button>
    </form>
  );
}
