import React, { useState } from "react";
// Ensure you have this file for styling
import "./src/style.css"
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This is the best product I have ever used!",
      author: "Jane Doe",
    },
    {
      quote: "Absolutely fantastic! Highly recommend it.",
      author: "John Smith",
    },
    {
      quote: "An amazing experience from start to finish.",
      author: "Emily Johnson",
    },
    {
      quote: "Exceeded all my expectations, superb quality!",
      author: "Michael Brown",
    },
    {
      quote: "Incredible value for the price, will buy again.",
      author: "Sarah Davis",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        <p>{testimonials[currentIndex].quote}</p>
      </div>
      <div className="testimonials-author">
        <p>- {testimonials[currentIndex].author}</p>
      </div>
      <div className="nav">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );1
};

export default Testimonials;
