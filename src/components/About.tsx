const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            ABOUT <span className="text-blue-900">US</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80"
            alt="Medical team"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div>
            <p className="text-gray-700 leading-relaxed">
              At HealthCare, we are committed to providing exceptional medical care with a personal touch. Our team of experienced healthcare professionals works tirelessly to ensure that every patient receives the highest quality of care in a comfortable and welcoming environment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">EFFICIENCY:</h3>
            <p className="text-gray-700">
              Our streamlined processes and modern facilities ensure that you receive timely and effective medical care without unnecessary delays.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">CONVENIENCE:</h3>
            <p className="text-gray-700">
              With our online appointment booking system and flexible scheduling options, accessing quality healthcare has never been easier.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">PERSONALIZATION:</h3>
            <p className="text-gray-700">
              We understand that every patient is unique, and we tailor our medical services to meet your specific needs and preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;