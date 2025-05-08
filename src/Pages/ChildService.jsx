import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ServicesProvider } from '../Context/ServiceContext';

const ChildServicesPage = () => {
  const { serviceSlug } = useParams();
  const { service } = useContext(ServicesProvider);

  const parentService = service.find(
    (s) => s.sulg === serviceSlug?.toLowerCase()
  );

  if (!parentService) {
    return <div className="p-4 text-red-500">Service not found.</div>;
  }

  return (
    <div className="w-full min-h-screen bg-blue-50 px-4 py-10 sm:px-6 lg:px-10">
      <h1 className="text-3xl font-bold mb-4 mt-10 text-center">{parentService.title}</h1>
      <p className="text-xl text-gray-700 mb-6 text-center">{parentService.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {parentService.details.map((detail, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-4 border border-gray-100"
          >
            <div className="text-4xl mb-2">{detail.logo}</div>
            <h2 className="text-xl font-semibold mb-2">{detail.name}</h2>
            <p className="text-gray-600">{detail.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChildServicesPage;