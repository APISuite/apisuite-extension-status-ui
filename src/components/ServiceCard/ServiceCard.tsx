import React from "react";

import StatusIcon from "components/StatusIcon/StatusIcon";

import { ServiceCardProps } from "./types";

//import "./styles.scss";
import useStyles from "./styles";

const ServiceCard: React.FC<ServiceCardProps> = ({ serviceName, serviceStatusDescription, serviceStatusCode }) => {
  const classes = useStyles();

  return (
    <li className={classes.serviceCard}>
      <div className={classes.serviceCardDescription}>
        <h3>{serviceName}</h3>
        <p>{serviceStatusDescription}</p>
      </div>

      <span className={`${classes[serviceStatusCode.toLowerCase()]} ${classes.icon}`}>
        <StatusIcon statusCode={serviceStatusCode} />
      </span>
    </li>
  );
};

export default ServiceCard;
