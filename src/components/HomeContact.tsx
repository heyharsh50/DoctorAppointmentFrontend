import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeContact = () => {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Book Appointment</h2>
            <p className="text-xl text-blue-100">With 100+ Trusted Doctors</p>
          </div>
          <Link
            to="/register"
            className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors"
          >
            Create account
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;