import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServicesProvider } from "../Context/ServiceContext";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const insuranceLogos = [
  "/logos/lic.png",
  "/logos/hdfc.png",
  "/logos/sbi.png",
  "/logos/icici.png",
  "/logos/bajaj.png",
  "/logos/tata.png",
  "/logos/reliance.png",
  "/logos/max.png"
];

const Services = ({ refProp }) => {
  const { service } = useContext(ServicesProvider);
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Sliding animation
      const totalWidth = sliderRef.current.scrollWidth;
      gsap.to(sliderRef.current, {
        x: `-${totalWidth / 2}`,
        duration: 10,
        ease: "linear",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        if (refProp) refProp.current = el;
      }}
      className="bg-gray-50 py-16 px-6 md:px-20 text-center"
    >
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Our Insurance Services
      </h2>
      <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
        We offer a wide range of insurance solutions to protect what matters
        most to you. From maritime operations to property protection, we've got
        you covered.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {service.slice(0, 4).map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white rounded-xl shadow-sm p-6 text-left hover:shadow-md transition"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-2xl rounded-md mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-md">
        <Link to="apricoat-insurance/allserivces">View all Services</Link>
      </button>

      {/* Partners Logo Slider */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Partners</h3>
        <div className="overflow-hidden relative">
          <div
            ref={sliderRef}
            className="flex gap-10 w-max items-center px-4"
          >
            {insuranceLogos.concat(insuranceLogos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Insurance Partner Logo"
                className="h-16 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
