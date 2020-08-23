import React from "react";

import StatusIcon from "components/StatusIcon/StatusIcon";

import { ServiceCardProps } from "./types";

import useStyles from './styles';

const ServiceCard: React.FC<ServiceCardProps> = ({ serviceName, serviceStatusDescription, serviceStatusCode }) => {
  const classes = useStyles();

  return (
    <li className={classes["service-card"]}>
      <div className={classes["service-card-description"]}>
        <h3>{serviceName}</h3>
        <p>{serviceStatusDescription}</p>
      </div>

      <span className={`${classes[serviceStatusCode.toLowerCase()]} ${classes[".icon"]}`}>
        <StatusIcon statusCode={serviceStatusCode} />
      </span>
    </li>
  );
};

export default ServiceCard;
