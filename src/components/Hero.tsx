import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-blue-900 text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Health,<br />Our Priority
            </h1>
            <p className="text-lg mb-8 text-blue-100">
              Find and book appointments with qualified doctors near you.
              Quick, easy, and secure.
            </p>
            <Link
              to="/doctors"
              className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors"
            >
              Find a Doctor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
              alt="Doctor team"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;