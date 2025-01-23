import { useState } from 'react';
import { Clock, Info } from 'lucide-react';

const timeSlots = [
  '8:00 am', '8:30 am', '9:00 am', '9:30 am', '10:00 am', 
  '10:30 am', '11:00 am', '11:30 am'
];

const weekDays = [
  { day: 'MON', date: '10' },
  { day: 'TUE', date: '11' },
  { day: 'WED', date: '12' },
  { day: 'THU', date: '13' },
  { day: 'FRI', date: '14' },
  { day: 'SAT', date: '15' },
  { day: 'SUN', date: '16' },
];

const DoctorProfile = () => {
  const [selectedDay, setSelectedDay] = useState(weekDays[0]);
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start gap-6 mb-8">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
              alt="Dr. ABC"
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dr. ABC</h1>
              <p className="text-gray-600">MBBS - General Physician</p>
              <div className="flex items-center mt-2">
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  5 Years
                </span>
              </div>
              <div className="flex items-center mt-4">
                <Info className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-gray-600">About</span>
              </div>
              <p className="mt-2 text-gray-700">
                Experienced general physician specializing in primary care and preventive medicine.
              </p>
              <p className="mt-4 text-gray-900 font-medium">
                Appointment fee: ₹ 20
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Booking slots</h2>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {weekDays.map((day) => (
                <button
                  key={day.day}
                  onClick={() => setSelectedDay(day)}
                  className={`flex flex-col items-center min-w-[60px] p-2 rounded-md ${
                    selectedDay === day
                      ? 'bg-blue-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-sm">{day.day}</span>
                  <span className="text-lg font-semibold">{day.date}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 text-gray-400" />
              <span className="ml-2 text-gray-900 font-medium">Available Time Slots</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 text-sm rounded-md ${
                    selectedTime === time
                      ? 'bg-blue-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full mt-8 bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition-colors">
            Book an appointment
          </button>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Related Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add related doctor cards here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;