import React, { useState, useEffect } from "react";
import "../style/style.css";
import cleanpro from "../images/CleanPro.png";
import FlashCard from "../components/FlashCARDCleaning.js";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";

const CleanPro = () => {
  const [serviceTitle, setServiceTitle] = useState(null);
  const [showPopUpModal, setShowPopUpModal] = useState(false);
  const [serviceList, setServiceList] = useState(() => {
    try {
      const savedData = localStorage.getItem("modalData");
      const parsed = JSON.parse(savedData);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  // Save serviceList to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("modalData", JSON.stringify(serviceList));
    } catch (e) {
      console.error("Failed to save modalData", e);
    }
  }, [serviceList]);

  const handleValue = (service) => {
    setServiceTitle(service);
    setServiceList((prev) => [...prev, service]);
    setShowPopUpModal(true);
  };

  const onNavigateServices = () => {
    window.location.href = "/services";
  };

  const onNavigateBook = () => {
    window.location.href = "/book";
  };

  const BlendedEdgeImage = ({ src, alt, className = "" }) => {
    return (
      <div className={`relative ${className}`}>
        <img
          src={src}
          alt={alt}
          className="h-auto object-cover [mask-image:linear-gradient(to_left,black_90%,pink_100%)] border mx-2"
          style={{
            width: "50px",
            padding: "5px",
            boxShadow: "15px 5px 9px 5px lightgrey",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-current opacity-5 pointer-events-none" />
      </div>
    );
  };

  // Modal style
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    maxWidth: "90%",
    maxHeight: "80vh",
    overflowY: "auto",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    outline: "none",
  };

  const value = [
    {
      id: "1",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      title: "House Cleaning",
      description:
        "Regular maintenance cleaning to keep your home fresh and tidy.",
    },
    {
      id: "2",
      icon: (
        <svg
          className="w-10 h-10 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      title: "Deep Cleaning",
      description:
        "Thorough cleaning of every nook and cranny for a spotless home.",
    },
    {
      id: "3",
      icon: (
        <svg
          className="w-10 h-10 text-yellow-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Office Cleaning",
      description: "Professional cleaning services for your workplace.",
    },
    {
      id: "4",
      icon: (
        <svg
          className="w-10 h-10 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Carpet Cleaning",
      description:
        "Deep steam cleaning to remove stains and allergens from carpets.",
    },
    {
      id: "5",
      icon: (
        <svg
          className="w-10 h-10 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Move-In/Move-Out Cleaning",
      description:
        "Comprehensive cleaning for rental properties and new homes.",
    },
    {
      id: "6",
      icon: (
        <svg
          className="w-10 h-10 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Custom Cleaning",
      description: "Tailored cleaning solutions to meet your specific needs.",
    },
  ];

  const detailedLearnMore = [
    {
      id: "1",
      title: "House Cleaning",
      content: `1. House Cleaning
What's Included:

Comprehensive dusting of all surfaces including furniture, shelves, and decor

Vacuuming and mopping of all hard floors and carpets

Kitchen deep clean: countertops, sink, appliance exteriors, and cabinet fronts

Bathroom sanitization: toilet, shower, tub, mirrors, and fixtures

Trash removal and recycling organization

Bed making and light linen changing (upon request)

Frequency Options:

Weekly | Bi-weekly | Monthly | One-time

Average Time: 2-4 hours (depending on home size)

Starting at: $99 for studio/1-bedroom`,
    },
    {
      id: "2",
      title: "Deep Cleaning",
      content: `2. Deep Cleaning
Goes Beyond Regular Cleaning By:

Detailed baseboard and moldings cleaning

Interior window washing (reachable panes)

Appliance deep clean (inside microwave, oven, refrigerator)

Cabinet interior organization and wipe-down

Grout scrubbing in bathrooms and kitchens

Light fixture dusting and ceiling fan cleaning

Behind and under furniture cleaning

Ideal For:

Seasonal deep cleans

Pre/post special events

Move-in/move-out preparation

After renovation cleanup

Starting at: $199 (price based on square footage)`,
    },
    {
      id: "3",
      title: "Office Cleaning",
      content: `3. Office Cleaning
Commercial Cleaning Features:

Daily/Weekly trash removal and recycling

Desk surface sanitization (while respecting personal items)

Breakroom deep clean: fridge, microwave, coffee stations

Disinfection of high-touch areas (door handles, light switches)

Restroom stocking and sanitization

Glass partition and entryway cleaning

Carpet spot treatment and vacuuming

Specialized Options:

After-hours cleaning

Green cleaning certification available

Security-vetted staff

Starting at: $150/week for small offices (up to 5 workstations)`,
    },
    {
      id: "4",
      title: "Carpet Cleaning",
      content: `4. Carpet Cleaning
Our Process:

Pre-treatment with eco-friendly solution

Hot water extraction (steam cleaning)

Spot treatment for stubborn stains

Rapid drying system (typically 4-6 hours)

Fabric protector application (optional)

Benefits:

Removes 98% of common allergens

Revives matted carpet fibers

Eliminates pet odors at the source

Extends carpet lifespan

Pricing: $0.35/sq ft (whole area) or $50/room (spot treatment)`,
    },
    {
      id: "5",
      title: "Move-In/Move-Out Cleaning",
      content: `5. Move-In/Move-Out Cleaning
Full-Service Package Includes:

Interior cabinet and drawer cleaning

Closet shelf vacuuming and wiping

Inside appliance cleaning (oven, fridge, dishwasher)

Window track and sill detailing

Light fixture and ceiling fan dusting

Wall spot cleaning and switch plate sanitization

Garage/sweeping (if applicable)

Guarantee:
Meets most landlord/property manager inspection checklists

Flat Rate Pricing:
$250+ (based on bedrooms: 1-bed=$250, 2-bed=$325, etc.)`,
    },
    {
      id: "6",
      title: "Custom Cleaning",
      content: `6. Custom Cleaning
Tailored Solutions For:

Airbnb turnover cleaning

Post-construction cleanup

Elderly/senior home support

Pet hair removal specialty

Allergy-sensitive cleaning

Special event prep/cleanup

How It Works:

Free consultation call

Custom checklist creation

Special supplies procurement (if needed)

Flexible scheduling

Pricing: Hourly rate ($45/hr) with 3-hour minimum`,
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <BlendedEdgeImage
              src={cleanpro}
              alt="Cleaning service the right way"
              className="max-w-4xl mx-auto"
            />
            <span className="text-xl font-bold text-blue-600">CleanPro</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-blue-600 font-medium">
              Home
            </a>
            <div
              onClick={onNavigateServices}
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Services
            </div>
            <a href="/about" className="hover:text-blue-600 transition">
              About Us
            </a>
            <a href="/contact" className="hover:text-blue-600 transition">
              Contact
            </a>
            <div
              onClick={onNavigateBook}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
            >
              Book Now
            </div>
          </nav>

          <div className="flex items-center">
            <a
              href="tel:+1234567890"
              className="hidden md:block mr-4 hover:text-blue-600 transition"
            >
              (123) 456-7890
            </a>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
              onClick={onNavigateBook}
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sparkling Clean Spaces, Every Time!
            </h1>
            <p className="text-xl mb-8">
              Professional cleaning services for homes & offices.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
                onClick={onNavigateBook}
              >
                Book Now
              </button>
              <button
                className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-md font-medium transition"
                onClick={onNavigateServices}
              >
                View Services
              </button>
            </div>
            <div
              className="hidden md:block"
              style={{
                top: "15%",
                left: "60%",
                position: "absolute",
              }}
            >
              <FlashCard />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-blue-600 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "Certified & Insured Cleaners",
                description:
                  "All our cleaners are thoroughly vetted, trained, and insured for your peace of mind.",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-green-600 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                ),
                title: "Eco-Friendly Products",
                description:
                  "We use only environmentally safe cleaning products that are gentle on your family and pets.",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-yellow-600 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                ),
                title: "100% Satisfaction Guarantee",
                description:
                  "If you're not happy, we'll come back and re-clean the area at no additional cost.",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-purple-600 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Flexible Scheduling",
                description:
                  "Available 7 days a week with flexible time slots to fit your busy schedule.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Popular Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {value.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-start"
              >
                <div className="mr-4 mt-1">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  <div
                    className="text-blue-600 hover:underline mt-3 inline-block cursor-pointer"
                    onClick={() => handleValue(service)}
                  >
                    Learn more →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn More Modal */}
      <Modal
        open={showPopUpModal}
        onClose={() => setShowPopUpModal(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 500 } }}
      >
        <Box sx={modalStyle}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              size="small"
              style={{ color: "white", backgroundColor: "red" }}
              onClick={() => setShowPopUpModal(false)}
            >
              X
            </Button>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {serviceTitle?.title || "Service Details"}
            </h3>
            <div style={{ whiteSpace: "pre-line" }}>
              {detailedLearnMore.find((val) => val.id === serviceTitle?.id)
                ?.content || "Content not available."}
            </div>
          </div>
        </Box>
      </Modal>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                rating: 5,
                photo: "https://randomuser.me/api/portraits/women/43.jpg",
                review:
                  "CleanPro transformed my home! Their attention to detail is incredible. I've never seen my floors shine like this before.",
              },
              {
                name: "Michael Chen",
                role: "Office Manager",
                rating: 5,
                photo: "https://randomuser.me/api/portraits/men/32.jpg",
                review:
                  "We've been using CleanPro for our office cleaning for 2 years now. Reliable, professional, and always does an excellent job.",
              },
              {
                name: "Emily Rodriguez",
                role: "Busy Parent",
                rating: 5,
                photo: "https://randomuser.me/api/portraits/women/65.jpg",
                review:
                  "As a working mom, CleanPro has been a lifesaver. They handle the deep cleaning so I can spend quality time with my kids.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            First-Time Customer?
          </h2>
          <p className="text-xl mb-6">Get 20% Off Your First Cleaning!</p>
          <button
            className="bg-white text-blue-600 px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition"
            onClick={onNavigateBook}
          >
            Claim Your Discount
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-start mb-4">
                <div className="relative mr-3">
                  <BlendedEdgeImage
                    src={cleanpro}
                    alt="Cleaning service the right way"
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </div>
                <span className="text-xl font-bold mt-2">CleanPro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional cleaning services for homes and businesses in your
                area.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={onNavigateServices}
                    className="text-gray-400 hover:text-white transition cursor-pointer"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <div
                    onClick={onNavigateBook}
                    className="text-gray-400 hover:text-white transition cursor-pointer"
                  >
                    Book Now
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    House Cleaning
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Deep Cleaning
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Office Cleaning
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Carpet Cleaning
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Move-In/Out Cleaning
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to get updates and special offers.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-md text-gray-900 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} CleanPro Cleaning Services. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CleanPro;
