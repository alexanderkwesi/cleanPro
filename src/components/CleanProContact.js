import React, {useState, useRef, useCallback, useEffect} from "react";
import "../style/style.css";
import cleanpro from "../images/CleanPro.png";
import {FiX} from "react-icons/fi";
import Button from "@mui/material/Button";

const Contact = () => {

  const [showChat, setliveChat] = useState(false);

  const onNavigateBook = () => {
    window.location.href = "/book";
  };

  const onNavigateServices = () => {
    window.location.href = "/services";
  };

  const onNavigateHome = () => {
    window.location.href = "/";
  };

    const [messages, setMessages] = useState([
      { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
    ]);
    const [newMessage, setNewMessage] = useState("");
    const messagesEndRef = useRef(null);
  
    const scrollToBottom = useCallback(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messagesEndRef]); // Add dependencies here
  
    useEffect(() => {
      scrollToBottom();
    }, [messages, scrollToBottom]);
  
    const handleSendMessage = (e) => {
      e.preventDefault();
      if (newMessage.trim() === "") return;
  
      // Add user message
      const userMessage = {
        id: messages.length + 1,
        text: newMessage,
        sender: "user",
      };
      setMessages([...messages, userMessage]);
      setNewMessage("");
  
      // Simulate bot response after a delay
      setTimeout(() => {
        const botMessage = {
          id: messages.length + 2,
          text: `I received: "${newMessage}". This is a simulated response.`,
          sender: "bot",
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 1000);
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

  const Chat = 
    <div className="abosulte my-3">{showChat ? <livechat /> : ""}</div>;

  return (
    <div className="font-sans text-gray-800">
      {/* Header - Consistent with other pages */}
      <>{Chat}</>
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
            <a href="/about" className="hover:text-blue-600 transition">
              About Us
            </a>
            <a href="/contact" className="text-blue-600 font-medium">
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
              Contact CleanPro
            </h1>
            <p className="text-xl mb-8">
              We're here to answer your questions and schedule your cleaning.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-600">info@cleanpro.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-blue-600"
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
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Business Hours
                      </h4>
                      <p className="text-gray-600">
                        Monday - Friday: 8am - 6pm
                      </p>
                      <p className="text-gray-600">Saturday: 9am - 4pm</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Chat Option */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg
                    className="w-6 h-6 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Live Chat
                </h3>
                <p className="text-gray-600 mb-4">
                  Chat with us in real-time for immediate assistance.
                </p>
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition cursor-pointer"
                  onClick={() => {
                    setliveChat(true);
                  }}
                >
                  Start Chat
                </button>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden shadow-md">
                <iframe
                  title="CleanPro Service Areas"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155732912346!2d-73.987844924268!3d40.74844047138985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTQuNyJX!5e0!3m2!1sen!2sus!4v1623251234567!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
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

      {/* Live Chat - Consistent Communication */}

      <section>
        {showChat === true && (
          <div
            className="flex flex-col h-full w-auto mx-auto border border-gray-300 rounded-lg overflow-hidden bg-white right-1 bottom-0"
            style={{ position: "fixed", zIndex: 999 }}
          >
            {/* Chat header */}
            <div>
              <Button size="sm" 
                  style={{
                    color: "white",
                    border: "2px solid black",
                    backgroundColor: "red",
                    padding: "3px",
                    position: "fixed",
                    top: "1.5%",
                    right: "0.7%",
                  }}
                  onClick={() => {
                    setliveChat(false);
                  }}
                >
                X
              </Button>
            </div>
            <div className="bg-blue-600 text-white p-4">
              <h2 className="text-xl font-semibold">Live Chat Support</h2>
              <p className="text-sm opacity-80">We're here to help you!</p>
            </div>

            {/* Messages container */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-gray-200 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message input */}
            <form
              onSubmit={handleSendMessage}
              className="border-t border-gray-300 p-4 bg-white"
            >
              <div className="flex items-center">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition duration-200"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        )}
      </section>

      {/* Footer - Consistent with other pages */}
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
}

export default Contact;
