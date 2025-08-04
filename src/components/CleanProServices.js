import { useState } from "react";

const CleanProServices = () => {
  const [activeTab, setActiveTab] = useState("residential");
  const [openQuestion, setOpenQuestion] = useState(null);





   const onNavigateBook = () => {
     window.location.href = "/book";
   };


  const services = {
    residential: [
      {
        title: "Regular House Cleaning",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
        description:
          "Weekly or bi-weekly maintenance cleaning to keep your home fresh and tidy.",
        features: [
          "Dusting all surfaces",
          "Vacuuming/mopping floors",
          "Kitchen & bathroom sanitizing",
          "Trash removal",
        ],
      },
      {
        title: "Deep Cleaning",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
        description:
          "Thorough cleaning of every nook and cranny for a spotless home.",
        features: [
          "Baseboard cleaning",
          "Inside appliances",
          "Window sills",
          "Detailed bathroom scrubbing",
        ],
      },
      {
        title: "Move-In/Move-Out Cleaning",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        description:
          "Complete cleaning service for properties before or after moving.",
        features: [
          "Wall washing",
          "Inside cabinets",
          "Light fixtures",
          "Complete floor care",
        ],
      },
      {
        title: "Post-Construction Cleaning",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        description:
          "Specialized cleaning after renovations or construction projects.",
        features: [
          "Debris removal",
          "Dust elimination",
          "Surface polishing",
          "Final touch cleaning",
        ],
      },
    ],
    commercial: [
      {
        title: "Office Cleaning",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        description: "Professional cleaning services for your workplace.",
        features: [
          "Desk sanitization",
          "Common area cleaning",
          "Restroom servicing",
          "Floor maintenance",
        ],
      },
      {
        title: "Retail Space Cleaning",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
        description:
          "Store cleaning to maintain a welcoming environment for customers.",
        features: [
          "Display cleaning",
          "Floor care",
          "Dressing room maintenance",
          "High-touch surface disinfection",
        ],
      },
      {
        title: "Medical Facility Cleaning",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
        description:
          "Specialized cleaning meeting healthcare sanitation standards.",
        features: [
          "Biohazard protocols",
          "HIPAA compliance",
          "Medical waste disposal",
          "Sterilization services",
        ],
      },
    ],
    specialty: [
      {
        title: "Carpet & Upholstery Cleaning",
        image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
        description:
          "Deep steam cleaning to remove stains and allergens from fabrics.",
        features: [
          "Hot water extraction",
          "Stain treatment",
          "Deodorizing",
          "Fast drying",
        ],
      },
      {
        title: "Window Cleaning",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        description:
          "Interior and exterior window cleaning for crystal-clear views.",
        features: [
          "Streak-free finish",
          "Screen cleaning",
          "Track cleaning",
          "Eco-friendly solutions",
        ],
      },
      {
        title: "Pressure Washing",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        description:
          "Exterior cleaning for driveways, siding, and outdoor surfaces.",
        features: [
          "Concrete cleaning",
          "Deck restoration",
          "Mold/mildew removal",
          "Property enhancement",
        ],
      },
    ],
  };

  const pricing = [
    {
      service: "Basic Cleaning",
      price: "$99",
      details: "Up to 1000 sq ft, 1 bathroom",
    },
    {
      service: "Deep Cleaning",
      price: "$199",
      details: "Complete home deep clean",
    },
    { service: "Office Cleaning", price: "$150", details: "Up to 1500 sq ft" },
    {
      service: "Carpet Cleaning",
      price: "$0.35/sq ft",
      details: "Minimum $99",
    },
    {
      service: "Window Cleaning",
      price: "$5/window",
      details: "Interior & exterior",
    },
  ];

  const faqs = [
    {
      question: "How often should I schedule cleaning?",
      answer:
        "Most residential clients prefer weekly or bi-weekly service. Commercial spaces typically need daily or 5x/week cleaning depending on traffic.",
    },
    {
      question: "Do I need to provide cleaning supplies?",
      answer:
        "No, we bring all necessary equipment and eco-friendly cleaning products. You only need to provide access to water and electricity.",
    },
    {
      question: "Are your cleaners background-checked?",
      answer:
        "Yes, all team members undergo thorough background checks, reference verification, and intensive training before joining our team.",
    },
    {
      question: "What's your cancellation policy?",
      answer:
        "We require 24 hours notice for cancellations to avoid a $50 late cancellation fee. Emergency situations are handled case-by-case.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Cleaning Services
          </h1>
          <p className="text-xl md:text-2xl">
            Professional solutions for every space
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center mb-12 border-b">
            <button
              onClick={() => setActiveTab("residential")}
              className={`px-6 py-3 font-medium ${
                activeTab === "residential"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              Residential Cleaning
            </button>
            <button
              onClick={() => setActiveTab("commercial")}
              className={`px-6 py-3 font-medium ${
                activeTab === "commercial"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              Commercial Cleaning
            </button>
            <button
              onClick={() => setActiveTab("specialty")}
              className={`px-6 py-3 font-medium ${
                activeTab === "specialty"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              Specialty Cleaning
            </button>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[activeTab].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition" onClick={onNavigateBook}>
                    Book This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Service Pricing
          </h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-medium text-gray-700">
                    Service
                  </th>
                  <th className="px-6 py-4 text-left font-medium text-gray-700">
                    Starting Price
                  </th>
                  <th className="px-6 py-4 text-left font-medium text-gray-700">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {pricing.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                      {item.service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-bold">
                      {item.price}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="px-6 py-4 bg-gray-50 text-center">
              <p className="text-gray-600">
                *Prices may vary based on property size and condition
              </p>
              <button className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition" onClick={onNavigateBook}>
                Get a Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-gray-500 transform transition ${
                      openQuestion === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`px-6 pb-6 pt-0 bg-gray-50 transition-all duration-300 overflow-hidden ${
                    openQuestion === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for a Cleaner Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your first cleaning service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition" onClick={onNavigateBook}>
              Book Now
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-blue-600 transition">
              Call: (123) 456-7890
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CleanProServices;
