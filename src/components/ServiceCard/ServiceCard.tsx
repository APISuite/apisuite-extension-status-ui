import React from "react";

interface ExpectedProps {
  serviceName: string,
  serviceStatusCode: string,
  serviceStatusDescription: string,
};

const ServiceCard: React.FC<ExpectedProps> = ({ serviceName, serviceStatusCode, serviceStatusDescription }) => {
  return (
    <li className="service-card">
      <div className="description">
        <h3>${serviceName}</h3>
        <p>${serviceStatusDescription}</p>
      </div>

      <span className='${statusCode.toLowerCase()} icon'>
        {/* <${StatusIcon} statusCode=${serviceStatusCode} /> */}
      </span>
    </li>
  );
}

export default ServiceCard;
