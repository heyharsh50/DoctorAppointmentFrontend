interface DoctorCardProps {
  name: string;
  specialty: string;
  imageUrl: string;
  rating: number;
  available: boolean;
}

const DoctorCard = ({ name, specialty, imageUrl, rating, available }: DoctorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600">{specialty}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${
            available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {available ? 'Available' : 'Busy'}
          </span>
        </div>
        <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition-colors">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;