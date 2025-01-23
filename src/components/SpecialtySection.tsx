import { Users, Brain, Baby, Heart, Activity, Stethoscope } from 'lucide-react';

const specialties = [
  { icon: Stethoscope, name: 'General Physician' },
  { icon: Users, name: 'Family Medicine' },
  { icon: Brain, name: 'Neurology' },
  { icon: Baby, name: 'Pediatrics' },
  { icon: Heart, name: 'Cardiology' },
  { icon: Activity, name: 'General Surgery' },
];

const SpecialtySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Specialties</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <specialty.icon className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-lg font-medium text-center">{specialty.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtySection;