// Main imports
import React from "react";

// Styling imports
import "./styles.scss";

interface ServiceHistoryLogs {
  latestStatus: string,
  description: string,
  statusChangeDate: string,
};

interface ExpectedProps {
  serviceName: string,
  serviceHistoryLogs: ServiceHistoryLogs[],
};

const ServiceHistorySection: React.FC<ExpectedProps> = ({ serviceName, serviceHistoryLogs }) => {
  const logEntries = serviceHistoryLogs.map((logEntry) => {
    return (
      <div>
        <h4>{logEntry.latestStatus}</h4>
        <p>Description: {logEntry.description}</p>
        <p>Date: {logEntry.statusChangeDate}</p>
      </div>
    );
  });

  return (
    <div>
      <h3>{serviceName}</h3>

      {logEntries}
    </div>
  );
}

export default ServiceHistorySection;
