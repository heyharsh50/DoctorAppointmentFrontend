import React from 'react';
import { Star, MapPin, GraduationCap, DollarSign, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Doctor } from '../store/doctorsStore';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const navigate = useNavigate();

  const handleBookAppointment = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (doctor.available && doctor.id) {
      navigate(`/book-appointment/${doctor.id}`);
    }
  };

  const handleCardClick = () => {
    if (doctor.id) {
      navigate(`/doctor/${doctor.id}`);
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="relative">
        <img
          src={doctor.imageUrl || 'https://via.placeholder.com/400x300?text=Doctor'}
          alt={doctor.name}
          className="w-full h-48 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/400x300?text=Doctor';
          }}
        />
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-2">
            <Clock className={`w-4 h-4 ${doctor.available ? 'text-green-600' : 'text-red-600'}`} />
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              doctor.available 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {doctor.available ? 'Available Now' : 'Busy'}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        {/* Doctor Name and Rating */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Dr. {doctor.name}</h3>
            <p className="text-md font-medium text-blue-600 mt-1">{doctor.specialty}</p>
          </div>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-700">{doctor.rating}</span>
          </div>
        </div>

        {/* Info Grid */}
        <div className="space-y-3">
          {doctor.location && (
            <div className="flex items-center text-gray-600">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-blue-600" />
              </div>
              <span className="ml-3 text-sm">
                {doctor.location}
              </span>
            </div>
          )}
          
          {doctor.experience && (
            <div className="flex items-center text-gray-600">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-4 h-4 text-green-600" />
              </div>
              <span className="ml-3 text-sm">
                {doctor.experience} Years Experience
              </span>
            </div>
          )}
          
          {doctor.fee && (
            <div className="flex items-center text-gray-600">
              <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-4 h-4 text-purple-600" />
              </div>
              <span className="ml-3 text-sm">
                Consultation Fee: {doctor.fee}
              </span>
            </div>
          )}
        </div>
        
        {/* Book Appointment Button */}
        <button 
          onClick={handleBookAppointment}
          disabled={!doctor.available}
          className={`w-full mt-6 py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 ${
            doctor.available
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          } transition-colors`}
        >
          <Clock className="w-5 h-5" />
          <span>{doctor.available ? 'Book Appointment' : 'Not Available'}</span>
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;