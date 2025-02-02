import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import DoctorCard from './DoctorCard';
import { getDoctors } from '../store/doctorsStore';

const FeaturedDoctors: React.FC = () => {
  const navigate = useNavigate();
  const allDoctors = getDoctors();
  
  // Get featured doctors (top 4 by rating)
  const featuredDoctors = allDoctors
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 4)
    .map(doctor => ({
      ...doctor,
      // Ensure each doctor has required fields
      id: doctor.id || Math.random(),
      rating: doctor.rating || 4.5,
      available: doctor.available ?? true,
      fee: doctor.fee || "₹500",
      experience: doctor.experience || "5+ years"
    }));

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Doctors</h2>
          <p className="mt-4 text-lg text-gray-600">
            Meet our highly rated and experienced medical professionals
          </p>
        </div>

        {featuredDoctors.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button
                onClick={() => navigate('/doctors')}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                View All Doctors
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-600">
            <p>No featured doctors available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedDoctors;