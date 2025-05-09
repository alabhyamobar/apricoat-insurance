import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row mt-10">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 bg-blue-700 text-white px-6 py-10 sm:px-10 lg:px-16 flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 mt-10">
          VISIT US! WE ARE <br className="hidden sm:block" /> AVAILABLE IN KANPUR
        </h2>
        <p className="text-lg sm:text-xl mb-2">Better, see us in person!</p>
        <p className="text-base sm:text-lg leading-relaxed mb-6">
          We love our customers, so feel free to visit during normal business hours. <br /> We’re here in <strong>Cylinder Chauraha, Kalyanpur, Kanpur</strong>.
        </p>

        <a
          href="https://wa.me/918826856414"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-white text-blue-700 font-semibold px-5 py-3 rounded-md hover:bg-blue-100 transition w-max text-sm sm:text-base"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-5 h-5 mr-2"
          />
          Message us on WhatsApp
        </a>
        <p className="mt-4 mb-2 text-2xl font-bold">Visiting Hours</p>
        <ul >
          <li className="text-base sm:text-lg">Monday - Friday: 10:00 AM - 6:00 PM</li>
          <li className="text-base sm:text-lg">Saturday: 10:00 AM - 2:00 PM</li>
          <li className="text-base sm:text-lg">Sunday: Closed</li>
        </ul>
        
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 h-72 sm:h-96 lg:h-auto">
        <iframe
          title="Kanpur Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.0243357206323!2d80.26243290404507!3d26.487161292944432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c379c7f7abc79%3A0x37e3966d61f9c48!2sCylinder%20Chauraha!5e0!3m2!1sen!2sin!4v1746762785452!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
