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

const ServiceHistorySection: React.FC<ExpectedProps> = ({ serviceName, serviceStatusDescription, serviceStatusCode }) => {
  // Generating new sections, with their history within
  return <></>;
}

export default ServiceHistorySection;
