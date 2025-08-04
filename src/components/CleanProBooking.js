import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CleanProBook = () => {
  const [activeTab, setActiveTab] = useState("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    dateTime: "",
    propertySize: "",
    specialRequests: "",
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const serviceTypes = [
    "Standard Cleaning",
    "Deep Cleaning",
    "Move-In/Move-Out Cleaning",
    "Office Cleaning",
    "Post-Construction Cleaning",
  ];

  const propertySizes = [
    "Studio",
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "4+ Bedrooms",
    "Office (Small)",
    "Office (Medium)",
    "Office (Large)",
  ];

  const availableTimes = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your booking request! We will contact you shortly.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      dateTime: "",
      propertySize: "",
      specialRequests: "",
    });
  };

  const handleCalendarBooking = () => {
    if (!selectedTime) {
      alert("Please select a time for your booking");
      return;
    }
    const bookingData = {
      ...formData,
      dateTime: `${selectedDate.toDateString()} at ${selectedTime}`,
    };
    console.log("Calendar booking:", bookingData);
    alert(
      `Booking confirmed for ${selectedDate.toDateString()} at ${selectedTime}`
    );
  };

  const onNavigateBook = () => {
    window.location.href = "/book";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Book Our Services
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Request a quote or book instantly using our calendar
          </p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab("form")}
                className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === "form"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Request a Quote
              </button>
              <button
                onClick={() => setActiveTab("calendar")}
                className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === "calendar"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Instant Booking
              </button>
            </nav>
          </div>

          <div className="p-6 sm:p-8">
            {activeTab === "form" ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="serviceType"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Service Type
                    </label>
                    <div className="mt-1">
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      >
                        <option value="">Select a service</option>
                        {serviceTypes.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="dateTime"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Preferred Date & Time
                    </label>
                    <div className="mt-1">
                      <input
                        type="datetime-local"
                        name="dateTime"
                        id="dateTime"
                        value={formData.dateTime}
                        onChange={handleChange}
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="propertySize"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Property Size
                    </label>
                    <div className="mt-1">
                      <select
                        id="propertySize"
                        name="propertySize"
                        value={formData.propertySize}
                        onChange={handleChange}
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      >
                        <option value="">Select property size</option>
                        {propertySizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="specialRequests"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Special Requests
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        rows={4}
                        value={formData.specialRequests}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={onNavigateBook}
                  >
                    Get a Free Quote
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Select a Date
                  </h2>
                  <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    minDate={new Date()}
                    className="border rounded-md p-2 w-full"
                  />

                  <div className="mt-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                      Available Times
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 px-3 rounded-md text-sm font-medium ${
                            selectedTime === time
                              ? "bg-indigo-600 text-white"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Your Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="calendar-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="calendar-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 py-2 px-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="calendar-email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="calendar-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 py-2 px-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="calendar-phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="calendar-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-1 py-2 px-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="calendar-service"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Service Type
                      </label>
                      <select
                        id="calendar-service"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="mt-1 py-2 px-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      >
                        <option value="">Select a service</option>
                        {serviceTypes.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="calendar-size"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Property Size
                      </label>
                      <select
                        id="calendar-size"
                        name="propertySize"
                        value={formData.propertySize}
                        onChange={handleChange}
                        required
                        className="mt-1 py-2 px-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      >
                        <option value="">Select property size</option>
                        {propertySizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="calendar-requests"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Special Requests
                      </label>
                      <textarea
                        id="calendar-requests"
                        name="specialRequests"
                        rows={3}
                        value={formData.specialRequests}
                        onChange={handleChange}
                        className="mt-1 py-2 px-3 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={handleCalendarBooking}
                        className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleanProBook;
