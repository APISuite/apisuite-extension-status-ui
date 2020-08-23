import React from "react";

import HistoryCard from "components/HistoryCard";

import { ServiceHistoryProps } from "./types";

import useStyles from './styles';

const ServiceHistorySection: React.FC<ServiceHistoryProps> = ({ serviceName, serviceHistoryIncidents }) => {
  const classes = useStyles();

  const [isAccordionOpen, setIsAccordionOpen] = React.useState(false);

  const incidentCards = serviceHistoryIncidents.map((incident, index) => {
    return (
      <HistoryCard
        key={`serviceHistoryCard${index}`}
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
      <button className={classes["service-accordion-button"]} onClick={handleAccordionClick}>
        {serviceName}
      </button>

      {
        isAccordionOpen &&
        <div className={classes["service-accordion-contents"]}>
          {incidentCards}
        </div>
      }
    </>
  );
};

export default ServiceHistorySection;
