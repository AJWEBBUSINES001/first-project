import { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapPin, Phone, Mail } from 'lucide-react';
import Driverprofile from '@/assets/driverprofile.jpg';

// Fix Leaflet marker icons issue
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

interface FormState {
  name: string;
  phone: string;
  email: string;
  pickup: string;
  dropoff: string;
  serviceType: string;
  datetime: string;
  instructions: string;
}

const LocationPicker = ({
  onSelect,
}: {
  onSelect: (latlng: string) => void;
}) => {
  useMapEvents({
    click(e) {
      onSelect(`${e.latlng.lat}, ${e.latlng.lng}`);
    },
  });
  return null;
};

const DriverBooking: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    dropoff: '',
    serviceType: '',
    datetime: '',
    instructions: '',
  });

  const [dropoffPosition, setDropoffPosition] = useState<[number, number] | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <main className="pt-[150px]">
      <div className="min-h-screen bg-[whitesmoke] px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Book Driver</h1>

        {/* Driver Info */}
        <div className="mb-10 flex items-center gap-6 border-b pb-6 flex-wrap">
          <img src={Driverprofile} alt="Driver" className="w-28 h-28 object-cover rounded-full" />
          <div>
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-gray-600 flex items-center gap-2"><Mail size={16} /> johndoe@eaziego.com</p>
            <p className="text-gray-600 flex items-center gap-2"><Phone size={16} /> +1 (437) 999 9999</p>
            <p className="text-yellow-500">⭐ 4.8/5 Rating</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Your Full Name" onChange={handleChange} required className="input border p-2 rounded w-full" />
            <input name="phone" placeholder="Active Phone Number" onChange={handleChange} required className="input border p-2 rounded w-full" />
            <input name="email" placeholder="Email" onChange={handleChange} required className="input border p-2 rounded w-full" />
            <input name="pickup" placeholder="Pickup Location" onChange={handleChange} required className="input border p-2 rounded w-full" />
            <input name="dropoff" placeholder="Drop-off Location" onChange={handleChange} required className="input border p-2 rounded w-full" />
            <select name="serviceType" onChange={handleChange} required className="input border p-2 rounded w-full">
              <option value="">Select Service Type</option>
              <option value="Airport Pickup">Airport Pickup</option>
              <option value="Package Delivery">Package Delivery</option>
              <option value="Shopping Trip">Shopping Trip</option>
            </select>
            <input type="datetime-local" name="datetime" onChange={handleChange} required className="input border p-2 rounded w-full" />
          </div>
          <textarea name="instructions" placeholder="Special Instructions (Optional)" onChange={handleChange} className="input border p-2 rounded w-full" />

          <button type="submit" className="bg-yellow-500 hover:bg-yellow-400 text-black py-3 px-6 rounded-full font-semibold w-full sm:w-auto">
            Book Driver
          </button>
        </form>

        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center">
          <a href="https://wa.me/14374430485" target="_blank" className="text-green-600 underline text-lg flex gap-2 items-center mb-4 sm:mb-0">
            <Phone /> Chat on WhatsApp
          </a>
          <span className="text-blue-600 underline flex gap-2 items-center cursor-pointer">
            <MapPin /> Select on Google Maps (Coming soon)
          </span>
        </div>

        {/* Map */}
        <label className="block text-sm font-medium text-gray-700 mt-6 mb-2">Pick Drop-off Location on the map</label>
        <MapContainer center={[5.6037, -0.1870]} zoom={13} style={{ height: '300px' }} className="rounded">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationPicker onSelect={(val) => {
            setForm((prev) => ({ ...prev, dropoff: val }));
            const [lat, lng] = val.split(',').map(Number);
            setDropoffPosition([lat, lng]);
          }} />
          {dropoffPosition && <Marker position={dropoffPosition} />}
        </MapContainer>
      </div>
    </main>
  );
};

export default DriverBooking;
