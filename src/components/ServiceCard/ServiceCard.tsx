import React from "react";

import StatusIcon from "components/StatusIcon/StatusIcon";

import { ServiceCardProps } from "./types";

import "./styles.scss";

const ServiceCard: React.FC<ServiceCardProps> = ({ serviceName, serviceStatusDescription, serviceStatusCode }) => {
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
