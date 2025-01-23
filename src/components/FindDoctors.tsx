import { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import DoctorCard from './DoctorCard';

interface Doctor {
  name: string;
  specialty: string;
  imageUrl: string;
  rating: number;
  available: boolean;
  location?: string;
  experience?: string;
  fee?: string;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    rating: 5,
    available: true,
    location: "New York",
    experience: "15 years",
    fee: "₹30"
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
    rating: 4,
    available: true,
    location: "Los Angeles",
    experience: "10 years",
    fee: "₹25"
  },
  {
    name: "Dr. Emily Brown",
    specialty: "Pediatrician",
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80",
    rating: 5,
    available: false,
    location: "Chicago",
    experience: "8 years",
    fee: "₹20"
  },
  {
    name: "Dr. David Wilson",
    specialty: "Dermatologist",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
    rating: 5,
    available: true,
    location: "Boston",
    experience: "12 years",
    fee: "₹35"
  },
  {
    name: "Dr. Lisa Anderson",
    specialty: "Orthopedic",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    rating: 4,
    available: true,
    location: "Seattle",
    experience: "14 years",
    fee: "₹40"
  },
  {
    name: "Dr. James Taylor",
    specialty: "General Physician",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
    rating: 5,
    available: true,
    location: "Miami",
    experience: "7 years",
    fee: "₹15"
  }
];

const specialties = [
  "All Specialties",
  "Cardiologist",
  "Neurologist",
  "Pediatrician",
  "Dermatologist",
  "Orthopedic",
  "General Physician"
];

const FindDoctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [showFilters, setShowFilters] = useState(false);

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All Specialties' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find & Book Appointment</h1>
          <p className="text-gray-600">Search for doctors and book appointments instantly</p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors, specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t">
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty) => (
                  <button
                    key={specialty}
                    onClick={() => setSelectedSpecialty(specialty)}
                    className={`px-4 py-2 rounded-full text-sm ${
                      selectedSpecialty === specialty
                        ? 'bg-blue-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {specialty}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No doctors found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDoctors;