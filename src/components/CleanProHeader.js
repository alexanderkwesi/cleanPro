
import cleanpro from "../images/CleanPro.png";

const CleanProHeader = () => {

  const onNavigateAboutUs = () =>
  {
    window.location.href ="/about";
  }

  const onNavigateContact = () => {
    window.location.href = "/contact";
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
          className="h-auto object-cover border mx-2"
          style={{
            width: "50px",
            padding: "5px",
            boxShadow: "15px 5px 9px 5px lightgrey",
            maskImage: "linear-gradient(to right, black 90%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-current opacity-5 pointer-events-none" />
      </div>
    );
  };

  const onNavigateServices = () => {
    window.location.href = "/services";
  };

  const onNavigateHome = () => {

    window.location.href = "/home"
  }



  // ... (keep all your existing services, pricing, and faqs data)

  return (
    <div className="font-sans text-gray-800">
      {/* Header - Copied from CleanPro */}
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
            <button
              onClick={onNavigateHome}
              className="text-blue-600 font-medium"
            >
              Home
            </button>
            <button className="hover:text-blue-600 transition" onClick={onNavigateServices}>Services</button>
            <button className="hover:text-blue-600 transition" onClick={onNavigateAboutUs}>About Us</button>
            <button className="hover:text-blue-600 transition" onClick={onNavigateContact}>Contact</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" onClick={onNavigateBook}>
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
    </div>
  );
};

export default CleanProHeader;
