import { Link } from 'react-router-dom';

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "General Physician",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    available: true
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Cardiologist",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
    available: true
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80",
    available: false
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Neurologist",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
    available: true
  }
];

const FeaturedDoctors = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Doctors</h2>
          <p className="mt-4 text-lg text-gray-600">Book appointments with our top-rated medical professionals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg overflow-hidden transition-transform hover:scale-105">
              <img
                src={doctor.imageUrl}
                alt={doctor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className={`w-2 h-2 rounded-full mr-2 ${
                    doctor.available ? 'bg-green-500' : 'bg-gray-400'
                  }`}></span>
                  <span className="text-sm text-gray-600">
                    {doctor.available ? 'Available' : 'Unavailable'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                <p className="text-gray-600 mb-4">{doctor.specialty}</p>
                <Link
                  to={`/doctor/${doctor.id}`}
                  className="block w-full text-center bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDoctors;