import './App.css';
import { useState } from 'react';
function App() {
  const [formData, setFormData] = useState({
    fname: '',
    sname: '',
    email: '',
    pdf: null,
  });

  const [savedData, setSavedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleChange = (e) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [e.target.name]: e.target.value,
  //   }));
  // };


  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      pdf: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedData(formData);
    console.log('Saved Data:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-2xl mb-6">Submit Your Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fname" className="block text-gray-700">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter your first name"
              value={formData.fname}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              required
            />
            <label htmlFor="fname" className="block text-gray-700">Last Name</label>
            <input
              type="text"
              id="sname"
              name="sname"
              placeholder="Enter your first name"
              value={formData.sname}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pdf" className="block text-gray-700">Upload PDF</label>
            <input
              type="file"
              id="pdf"
              name="pdf"
              accept=".pdf"
              onChange={handleFileChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </form>
        {savedData && (
          <div className="mt-6">
            <h3 className="text-xl">Saved Data:</h3>
            <p><strong>First Name:</strong> {savedData.fname}</p>
            <p><strong>Last Name:</strong> {savedData.sname}</p>
            <p><strong>Email:</strong> {savedData.email}</p>
            <p><strong>PDF:</strong> {savedData.pdf ? savedData.pdf.name : 'No file uploaded'}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
