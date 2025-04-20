import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin, Phone, Mail } from "lucide-react";
import Driverprofile from "@/assets/driverprofile.jpg";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Fix Leaflet marker icons issue
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Confirm from "@/components/confirm";

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const LocationPicker = ({
  onSelect,
}: {
  onSelect: (latlng: string) => void;
}) => {
  useMapEvents({
    click(e: any) {
      onSelect(`${e.latlng.lat}, ${e.latlng.lng}`);
    },
  });
  return null;
};

const DriverBooking: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const duration = 3000
  
  const formSchema = z.object({
    name: z.string().min(3, "Name must contain at least 3 characters").max(50),
    phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    email: z.string().email(),
    pickup: z
      .string()
      .min(3, "Pickup location must contain at least 3 characters")
      .max(50),
    dropoff: z
      .string()
      .min(3, "Dropoff location must contain at least 3 characters")
      .max(50),
    serviceType: z.string().min(2).max(50),
    instructions: z.string().max(50).optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "linton",
      phone: "0543576794",
      email: "adujoy05@gmail.com",
      pickup: "dasdafsdf",
      dropoff: "asdfadsf",
      instructions: "asdfasdf",
      serviceType: "adfadsfadsfads",
    },
  });

  const [dropoffPosition, setDropoffPosition] = useState<
    [number, number] | null
  >(null);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    handleShowAlert()
    console.log(showAlert)
  }

  return (
    <main className="pt-[150px]">
      <div className="min-h-screen bg-[whitesmoke] px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Book Driver</h1>

        {/* Driver Info */}
        <div className="mb-10 flex items-center gap-6 border-b pb-6 flex-wrap">
          <img
            src={Driverprofile}
            alt="Driver"
            className="w-28 h-28 object-cover rounded-full"
          />
          <div>
            <h2 className="text-2xl font-semibold">Appiah Ernest</h2>
            <p className="text-gray-600 flex items-center gap-2">
              <Mail size={16} /> appiahernest3677@gmail.com
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <Phone size={16} /> +1 (437) 443 0485
            </p>
            <p className="text-yellow-500">⭐ 4.8/5 Rating</p>
          </div>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Full name" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Active Phone Number"
                        type="tel"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pickup"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Pickup Location"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dropoff"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Drop-off Location"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Service Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Airport Pickup">
                          Airport Pickup
                        </SelectItem>
                        <SelectItem value="Package Delivery">
                          Package Delivery
                        </SelectItem>
                        <SelectItem value="Shopping Trip">
                          Shopping Trip
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="instructions"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Special Instructions (Optional)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full sm:w-auto" disabled={showAlert}>
              Book Driver
            </Button>
          </form>
        </Form>

        <div className={`${showAlert ? "translate-x-0" : "translate-x-[150%]"} fixed top-[120px] right-4 z-50 transition-all duration-300 ease-in-out`}>
          <Confirm show={showAlert}/>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center">
          <a
            href="https://wa.me/14374430485"
            target="_blank"
            className="text-green-600 underline text-lg flex gap-2 items-center mb-4 sm:mb-0"
          >
            <Phone /> Chat on WhatsApp
          </a>
          <span className="text-blue-600 underline flex gap-2 items-center cursor-pointer">
            <MapPin /> Select on Google Maps (Coming soon)
          </span>
        </div>

        {/* Map */}
        <label className="block text-sm font-medium text-gray-700 mt-6 mb-2">
          Pick Drop-off Location on the map
        </label>
        <MapContainer
          center={[5.6037, -0.187]}
          zoom={13}
          style={{ height: "300px" }}
          className="rounded"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationPicker
            onSelect={(val) => {
              // setForm((prev) => ({ ...prev, dropoff: val }));
              const [lat, lng] = val.split(",").map(Number);
              setDropoffPosition([lat, lng]);
            }}
          />
          {dropoffPosition && <Marker position={dropoffPosition} />}
        </MapContainer>
      </div>
    </main>
  );
};

export default DriverBooking;
