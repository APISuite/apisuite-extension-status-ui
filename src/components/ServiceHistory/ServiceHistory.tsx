import React from "react";

import HistoryCard from "components/HistoryCard";

import { ServiceHistoryProps } from "./types";

import "./styles.scss";

const ServiceHistorySection: React.FC<ServiceHistoryProps> = ({ serviceName, serviceHistoryIncidents }) => {
  const [isAccordionOpen, setIsAccordionOpen] = React.useState(false);

  const incidentCards = serviceHistoryIncidents.map((incident, index) => {
    return (
      <HistoryCard
        key={index}
        latestStatus={incident.latestStatus}
        incident={incident.incident}
        solution={incident.solution}
        statusChangeDate={incident.statusChangeDate}
      />
    );
  });

  function handleAccordionClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()

    setIsAccordionOpen(!isAccordionOpen);
  }

  return (
    <>
      <button className="service-accordion-button" onClick={handleAccordionClick}>
        {serviceName}
      </button>

      {
        isAccordionOpen &&
        <div className="service-accordion-contents">
          {incidentCards}
        </div>
      }
    </>
  );
}

export default ServiceHistorySection;
