import { useState, useEffect } from "react";

const CleaningFlashcardCarousel = () => {
  const cleaningServices = [
    {
      id: 1,
      title: "Residential Cleaning",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
      description:
        "Thorough home cleaning including dusting, vacuuming, and sanitizing surfaces.",
    },
    {
      id: 2,
      title: "Deep Cleaning",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
      description:
        "Intensive cleaning targeting hard-to-reach areas and built-up grime.",
    },
    {
      id: 3,
      title: "Office Cleaning",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      description:
        "Professional cleaning for workspaces to maintain productivity.",
    },
    {
      id: 4,
      title: "Carpet Cleaning",
      image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
      description: "Steam cleaning to remove deep stains and allergens.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cleaningServices.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cleaningServices.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <div className="relative w-full max-w-md h-64">
      <div
        className="relative h-full w-full overflow-hidden rounded-xl shadow-lg"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Slides */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cleaningServices.map((service) => (
            <div key={service.id} className="w-full flex-shrink-0 relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-1 rounded-full shadow-md transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-1 rounded-full shadow-md transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {cleaningServices.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition ${
              currentIndex === index ? "bg-blue-600 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CleaningFlashcardCarousel;
