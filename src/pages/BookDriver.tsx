import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin, Phone, Mail } from "lucide-react";
import Driverprofile from "@/assets/driverprofile.jpg";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
import Confirm from "@/components/Confirm";
import Header from "@/components/Header";

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const LocationPicker = ({ onSelect }: { onSelect: (latlng: string) => void }) => {
  useMapEvents({
    click(e) {
      onSelect(`${e.latlng.lat}, ${e.latlng.lng}`);
    },
  });
  return null;
};

const formSchema = z.object({
  name: z.string().min(3).max(50),
  phone: z
  .string()
  .min(7, "Phone number is too short")
  .max(20, "Phone number is too long")
  .regex(/^\+\d{1,3}\d{4,}$/, "Invalid phone number format"),
  email: z.string().email(),
  pickup: z.string().min(3).max(50),
  dropoff: z.string().min(3).max(50),
  serviceType: z.string().min(2).max(50),
  instructions: z.string().max(50).optional(),
});

const DriverBooking: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [dropoffPosition, setDropoffPosition] = useState<[number, number] | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      pickup: "",
      dropoff: "",
      instructions: "",
      serviceType: "",
    },
  });

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  async function onSubmit() {
    try {
      setIsLoading(true);
      await emailjs.sendForm(
        "service_gfxg6or",
        "template_cn22w0f",
        formRef.current!,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY || "",
        }
      );
      setIsLoading(false);
      setIsError(false);
      form.reset();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
    }
    handleShowAlert();
  }

  return (
    <>
    <Header headcolor="bg-black" />
    <main className="pt-[120px]">
      <div className="min-h-screen bg-white p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Book Driver</h1>

        <div className="mb-10 flex items-center gap-6 border-b pb-6 flex-wrap">
          <img
            src={Driverprofile}
            alt="Driver"
            className="w-28 h-28 object-cover rounded-full"
          />
          <div>
            <h2 className="text-2xl font-semibold">Appiah Ernest</h2>
            <p className="text-gray-600 flex items-center gap-2">
              <Mail size={16} />
              appiahernest3677@gmail.com
              <a
                href="mailto:appiahernest3677@gmail.com"
                className="ml-2 text-blue-600 underline"
              >
                Email
              </a>
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <Phone size={16} />
              +1 (437) 443 0485
              <a
                href="tel:+14374430485"
                className="ml-2 text-green-600 underline"
              >
                Call
              </a>
            </p>
            <p className="text-yellow-500">⭐ 4.8/5 Rating</p>
          </div>
        </div>

        <Form {...form}>
          <form
            ref={formRef}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
            <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <label className="text-sm font-medium mb-1 block">Phone</label>
                  <PhoneInput
                    country="ca"
                    value={form.watch("phone")}
                    onChange={(value) => form.setValue("phone", `+${value}`)}
                    inputStyle={{ width: "100%" }}
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: false,
                    }}
                  />
                  <FormMessage>{form.formState.errors.phone?.message}</FormMessage>
                </div>

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
                        <Input placeholder="Pickup Location" {...field} />
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
                        <Input placeholder="Drop-off Location" {...field} />
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
                        {["Airport Pickup", "Package Delivery", "Shopping Trip"].map(
                          (item) => (
                            <SelectItem key={item} value={item}>
                              {item}
                            </SelectItem>
                          )
                        )}
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


            <Button type="submit" className="w-full sm:w-auto h-full" disabled={showAlert}>
              {isLoading ? <div className="loader"></div> : "Book Driver"}
            </Button>
          </form>
        </Form>

        <div
          className={`${
            showAlert ? "translate-x-0" : "translate-x-[150%]"} fixed top-[120px] right-4 z-50 transition-all duration-300 ease-in-out`}
        >
          {isError ? (
            <Confirm variant="warning" message="Something went wrong" show={showAlert} />
          ) : (
            <Confirm show={showAlert} />
          )}
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

        <label className="block text-sm font-medium text-gray-700 mt-6 mb-2">
          Pick Drop-off Location on the map
        </label>
        <MapContainer
          center={[5.6037, -0.187]}
          zoom={13}
          style={{ height: "300px" }}
          className="rounded"
        >
          <TileLayer className="" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationPicker
            onSelect={(val) => {
              const [lat, lng] = val.split(",").map(Number);
              setDropoffPosition([lat, lng]);
            }}
          />
          {dropoffPosition && <Marker position={dropoffPosition} />}
        </MapContainer>
      </div>
    </main>
    </>
  );
};

export default DriverBooking;
