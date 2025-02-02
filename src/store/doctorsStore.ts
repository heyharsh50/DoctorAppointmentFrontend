export interface Doctor {
  id?: number;
  name: string;
  specialty: string;
  imageUrl: string;
  rating: number;
  available: boolean;
  location?: string;
  experience?: string;
  fee?: string;
  email?: string;
  education?: string;
}

// Initial doctors data
let doctors: Doctor[] = [
  {
    id: 1,
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
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
    rating: 4,
    available: true,
    location: "Los Angeles",
    experience: "10 years",
    fee: "₹25"
  }
];

// Get all doctors
export const getDoctors = () => doctors;

// Add a new doctor
export const addDoctor = (doctor: Doctor) => {
  const newId = doctors.length > 0 ? Math.max(...doctors.map(d => d.id || 0)) + 1 : 1;
  const newDoctor = { ...doctor, id: newId };
  doctors = [...doctors, newDoctor];
  return newDoctor;
};

// Update a doctor
export const updateDoctor = (id: number, updatedDoctor: Doctor) => {
  doctors = doctors.map(doctor => 
    doctor.id === id ? { ...updatedDoctor, id } : doctor
  );
  return doctors.find(doctor => doctor.id === id);
};

// Delete a doctor
export const deleteDoctor = (id: number) => {
  doctors = doctors.filter(doctor => doctor.id !== id);
};

// Get specialties
export const getSpecialties = () => [
  "All Specialties",
  "Cardiologist",
  "Neurologist",
  "Pediatrician",
  "Dermatologist",
  "Orthopedic",
  "General Physician"
];
