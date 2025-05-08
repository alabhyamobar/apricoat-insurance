import React, { useContext } from 'react';
import { ServicesProvider } from '../Context/ServiceContext';
import { useNavigate } from 'react-router-dom';

const ServiceDetail = () => {
  const { service } = useContext(ServicesProvider);
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-blue-50 px-4 py-12 sm:px-6 lg:px-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-800 mb-12">
        Our Services
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {service.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>

            <button
              onClick={() => navigate(`/apricoat-insurance/services/${item.slug}`)}
              className="mt-6 self-start bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;