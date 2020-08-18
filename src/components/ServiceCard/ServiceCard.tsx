// Main imports
import React from "react";

// Component imports
import StatusIcon from "components/StatusIcon/StatusIcon";

// Styling imports
import "./styles.scss";

interface ExpectedProps {
  serviceName: string,
  serviceStatusDescription: string,
  serviceStatusCode: string,
};

const ServiceCard: React.FC<ExpectedProps> = ({ serviceName, serviceStatusDescription, serviceStatusCode }) => {
  return (
    <li className="service-card">
      <div className="description">
        <h3>{serviceName}</h3>
        <p>{serviceStatusDescription}</p>
      </div>

      <span className={`${serviceStatusCode.toLowerCase()} icon`}>
        <StatusIcon statusCode={serviceStatusCode} />
      </span>
    </li>
  );
}

export default ServiceCard;
