import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDoctors, addDoctor, updateDoctor, deleteDoctor, type Doctor } from '../../store/doctorsStore';

const AdminDashboard: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn || userRole !== 'admin') {
      navigate('/login');
      return;
    }

    setDoctors(getDoctors());
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const handleAddDoctor = () => {
    setIsEditing(true);
    setEditingDoctor({
      name: '',
      specialty: '',
      imageUrl: '',
      rating: 5,
      available: true,
      location: '',
      experience: '',
      fee: '',
      email: '',
      education: ''
    });
    setPreviewImage(null);
  };

  const handleEditDoctor = (doctor: Doctor) => {
    setIsEditing(true);
    setEditingDoctor(doctor);
    setPreviewImage(doctor.imageUrl);
  };

  const handleDeleteDoctor = (id: number) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      deleteDoctor(id);
      setDoctors(getDoctors());
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setPreviewImage(imageUrl);
        if (editingDoctor) {
          setEditingDoctor({ ...editingDoctor, imageUrl });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveDoctor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingDoctor) return;

    if (editingDoctor.id) {
      updateDoctor(editingDoctor.id, editingDoctor);
    } else {
      addDoctor(editingDoctor);
    }

    setDoctors(getDoctors());
    setIsEditing(false);
    setEditingDoctor(null);
    setPreviewImage(null);
  };

  if (isEditing) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">
            {editingDoctor?.id ? 'Edit Doctor' : 'Add New Doctor'}
          </h2>
          <form onSubmit={handleSaveDoctor} className="space-y-4">
            {/* Image Upload Section */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Profile Image</label>
              <div className="flex items-center space-x-4">
                <div className="relative w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg overflow-hidden">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-gray-500 text-sm text-center">
                        Click to upload image
                      </span>
                    </div>
                  )}
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2 text-sm text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100"
                >
                  Change Image
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={editingDoctor?.name || ''}
                onChange={(e) => setEditingDoctor(prev => prev ? {...prev, name: e.target.value} : null)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Specialty</label>
              <input
                type="text"
                value={editingDoctor?.specialty || ''}
                onChange={(e) => setEditingDoctor(prev => prev ? {...prev, specialty: e.target.value} : null)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                value={editingDoctor?.location || ''}
                onChange={(e) => setEditingDoctor(prev => prev ? {...prev, location: e.target.value} : null)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Experience</label>
              <input
                type="text"
                value={editingDoctor?.experience || ''}
                onChange={(e) => setEditingDoctor(prev => prev ? {...prev, experience: e.target.value} : null)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Fee</label>
              <input
                type="text"
                value={editingDoctor?.fee || ''}
                onChange={(e) => setEditingDoctor(prev => prev ? {...prev, fee: e.target.value} : null)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Availability Toggle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Availability Status</label>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setEditingDoctor(prev => prev ? {...prev, available: true} : null)}
                  className={`px-4 py-2 rounded-md ${
                    editingDoctor?.available 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Available
                </button>
                <button
                  type="button"
                  onClick={() => setEditingDoctor(prev => prev ? {...prev, available: false} : null)}
                  className={`px-4 py-2 rounded-md ${
                    !editingDoctor?.available 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Busy
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setEditingDoctor(null);
                  setPreviewImage(null);
                }}
                className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Manage Doctors</h2>
            <button
              onClick={handleAddDoctor}
              className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Add New Doctor
            </button>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {doctors.map((doctor) => (
                <li key={doctor.id} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={doctor.imageUrl || 'https://via.placeholder.com/100x100?text=Doctor'}
                        alt={doctor.name}
                        className="w-16 h-16 rounded-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://via.placeholder.com/100x100?text=Doctor';
                        }}
                      />
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{doctor.name}</h3>
                        <p className="text-sm text-gray-500">{doctor.specialty}</p>
                        <p className="text-sm text-gray-500">{doctor.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        doctor.available 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {doctor.available ? 'Available' : 'Busy'}
                      </span>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditDoctor(doctor)}
                          className="px-3 py-1 text-sm text-white bg-green-600 rounded-md hover:bg-green-700"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => doctor.id && handleDeleteDoctor(doctor.id)}
                          className="px-3 py-1 text-sm text-white bg-red-600 rounded-md hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
