import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ServicesProvider } from "../Context/ServiceContext";

const ChildServicesPage = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const serviceSlug = pathSegments[pathSegments.length - 1];

  const { service } = useContext(ServicesProvider);
  const parentService = service.find((s) => s.slug === serviceSlug);
  console.log(parentService);
  if (!parentService) {
    return <div className="p-4 text-red-500">Service not found.</div>;
  }

  return (
    <div className="w-full min-h-screen bg-blue-50 px-4 py-10 sm:px-6 lg:px-10">
      <h1 className="text-3xl font-bold mb-4 mt-10 text-center">
        {parentService.title}
      </h1>
      <p className="text-xl text-gray-700 mb-6 text-center italic">
        "{parentService.description}"
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {parentService.details.map((detail, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-4 border border-gray-100"
          >
            <div className="text-4xl mb-2">{detail.logo}</div>
            <h2 className="text-xl font-semibold mb-2 italic">{detail.name}</h2>
            <p className="text-gray-600 mb-4 italic">"{detail.desc}"</p>
            <Link to="/apricoat-insurance/quotes">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm lg:text-base font-semibold transition-colors duration-200">
                Get Quotes
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChildServicesPage;
