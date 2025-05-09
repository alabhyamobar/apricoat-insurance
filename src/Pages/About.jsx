import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const About = ({ refProp }) => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%', // start when top of About hits 80% of viewport height
            toggleActions: 'play none none none',
          }
          
        }
      );

      gsap.fromTo(
        imageRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        if (refProp) refProp.current = el;
      }}
      className="min-h-screen bg-white flex flex-col justify-center px-6 md:px-20 py-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Text Section */}
        <div ref={textRef} className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Trusted Insurance Partner Since 2024
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            At Apricoat Insurance, we are dedicated to providing our clients with the highest level of customer service and the best insurance products available.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Our team of experts is here to help you navigate the complex world of insurance and to find the coverage that meets your needs and budget. We offer a wide range of products, including motor, home, health, life and corporate insurance. Explore our website to learn more about our services and get in touch with us to get started.
          </p>
          <button className="bg-blue-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900 transition">
            <Link to="apricoat-insurance/team">Learn More About Us</Link>
          </button>
        </div>

        {/* Image Section */}
        <div ref={imageRef} className="flex-1">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
              alt="Office team"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
