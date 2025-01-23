import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            CONTACT <span className="text-blue-900">US</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
              alt="Doctor consultation"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">OUR OFFICE</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-900 mt-1" />
                  <div className="ml-4">
                    <p className="text-gray-700">123 Healthcare Street</p>
                    <p className="text-gray-700">Medical District, City 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-900" />
                  <p className="ml-4 text-gray-700">Tel: +91 123456789</p>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-900" />
                  <p className="ml-4 text-gray-700">Email: doctor@gmail.com</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">FOR MORE INFO.</h2>
              <p className="text-gray-700 mb-4">Learn more about our doctors.</p>
              <button className="inline-flex items-center px-4 py-2 border border-blue-900 text-blue-900 rounded-md hover:bg-blue-900 hover:text-white transition-colors">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;