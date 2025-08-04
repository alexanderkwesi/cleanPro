import React from "react";
import "../style/style.css";
import cleanpro from "../images/CleanPro.png";

// Team member data
const teamMembers = [
  {
    name: "John Smith",
    position: "Founder & CEO",
    bio: "With over 15 years in the cleaning industry, John founded CleanPro to bring professional standards to residential cleaning.",
    funFact: "Once cleaned a celebrity's penthouse in record time!",
    photo: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    name: "Maria Garcia",
    position: "Operations Manager",
    bio: "Maria ensures every CleanPro team delivers exceptional service. She's implemented our quality control systems.",
    funFact: "Can identify any cleaning product by smell alone.",
    photo: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    name: "David Kim",
    position: "Customer Experience",
    bio: "David makes sure every client is happy. He handles scheduling and special requests with care.",
    funFact:
      "Once trained as a professional organizer before joining CleanPro.",
    photo: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Sarah Johnson",
    position: "Lead Cleaner",
    bio: "Sarah leads our cleaning teams with perfectionist standards. She's been with CleanPro since day one.",
    funFact: "Has a secret technique for removing even the toughest stains.",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

// Awards data
const awards = [
  {
    name: "Best Cleaning Service 2023",
    issuer: "Local Business Awards",
    year: "2023",
  },
  {
    name: "Green Business Certification",
    issuer: "Eco-Friendly Alliance",
    year: "2022",
  },
  {
    name: "Customer Service Excellence",
    issuer: "Service Industry Association",
    year: "2021",
  },
];

const AboutUs = () => {

  const onNavigateBook = () => {
    window.location.href = "/book";
  };

  const onNavigateServices = () => {
    window.location.href = "/services";
  };

  const onNavigateHome = () => {
    window.location.href = "/";
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
            boxShadow: " 15px 5px 9px 5px lightgrey",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-current opacity-5 pointer-events-none" />
      </div>
    );
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header - Consistent with CleanPro.js */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div
            className="flex items-center cursor-pointer"
            onClick={onNavigateHome}
          >
            <BlendedEdgeImage
              src={cleanpro}
              alt="Cleaning service the right way"
              className="max-w-4xl mx-auto"
            />
            <span className="text-xl font-bold text-blue-600">CleanPro</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-blue-600 transition">
              Home
            </a>
            <a href="/services" className="hover:text-blue-600 transition">
              Services
            </a>
            <a href="/about" className="text-blue-600 font-medium">
              About Us
            </a>
            <a href="/contact" className="hover:text-blue-600 transition">
              Contact
            </a>
            <button
              onClick={onNavigateBook}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Book Now
            </button>
          </nav>

          <div className="flex items-center">
            <a
              href="tel:+1234567890"
              className="hidden md:block mr-4 hover:text-blue-600 transition"
            >
              (123) 456-7890
            </a>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition" onClick={onNavigateBook}>
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
              About CleanPro
            </h1>
            <p className="text-xl mb-8">
              Professional cleaning with a personal touch since 2015.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6">
                  CleanPro was founded in 2015 by John Smith, a cleaning
                  industry veteran who saw a need for more reliable,
                  professional home cleaning services. What started as a
                  one-person operation has grown into a team of 25 dedicated
                  professionals serving over 1,000 happy customers.
                </p>
                <p className="text-lg mb-6">
                  Our journey began with a simple idea: cleaning should be done
                  right the first time, every time. We've maintained that
                  commitment to excellence while expanding our services to meet
                  our clients' evolving needs.
                </p>
                <p className="text-lg">
                  Today, we're proud to be the most trusted cleaning service in
                  our area, known for our attention to detail and exceptional
                  customer service.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <div className="aspect-w-16 aspect-h-9 bg-blue-50 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="CleanPro team working"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <p className="text-sm text-gray-500 italic">
                  Fun fact: {member.funFact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Mission & Values
            </h2>

            <div className="bg-blue-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                Our Mission
              </h3>
              <p className="text-lg">
                To provide exceptional cleaning services that enhance our
                clients' quality of life, while maintaining the highest
                standards of professionalism, reliability, and environmental
                responsibility.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every cleaning is performed to
                  our exacting standards, with thorough checklists and quality
                  control measures.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
                <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
                <p className="text-gray-600">
                  We use environmentally safe cleaning products that are tough
                  on dirt but gentle on your family, pets, and the planet.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500">
                <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We listen to your needs and
                  tailor our services accordingly.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-3">Team Integrity</h3>
                <p className="text-gray-600">
                  We hire only trustworthy professionals who undergo thorough
                  background checks and training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Certifications & Awards
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{award.name}</h3>
                  <p className="text-gray-600 mb-1">{award.issuer}</p>
                  <p className="text-sm text-gray-500">{award.year}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Our Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium mb-2">
                    Green Cleaning Certified
                  </h4>
                  <p className="text-gray-600">
                    All our cleaners are trained in eco-friendly cleaning
                    methods and use only certified green products.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Fully Insured</h4>
                  <p className="text-gray-600">
                    We carry comprehensive liability insurance to protect your
                    home and our team.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">
                    Background Checked
                  </h4>
                  <p className="text-gray-600">
                    Every team member undergoes thorough background screening
                    before joining CleanPro.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">COVID-19 Trained</h4>
                  <p className="text-gray-600">
                    Our staff is trained in enhanced cleaning protocols for your
                    safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the CleanPro Difference?
          </h2>
          <p className="text-xl mb-6">
            Book your first cleaning today and enjoy a spotless home!
          </p>
          <button
            onClick={onNavigateBook}
            className="bg-white text-blue-600 px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition"
          >
            Book Your Cleaning Now
          </button>
        </div>
      </section>

      {/* Footer - Consistent with CleanPro.js */}
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
                    href="/"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition"
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
                  <button
                    onClick={onNavigateBook}
                    className="text-gray-400 hover:text-white transition"
                  >
                    Book Now
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition"
                  >
                    House Cleaning
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Deep Cleaning
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Office Cleaning
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Carpet Cleaning
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
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

export default AboutUs;
