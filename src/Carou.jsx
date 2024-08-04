import { useState, useEffect } from "react";

export default function Carou({ slides }) {
  const [current, setCurrent] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Adjust the interval time (in milliseconds) as needed

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [current]); // Run effect whenever `current` changes

  return (
    <div className="overflow-hidden relative rounded-xl pb-10">
      <div
        className={`flex transition ease-out duration-500`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <img key={index} src={s} alt={`slide ${index}`} />
        ))}
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full w-5 h-5 cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
