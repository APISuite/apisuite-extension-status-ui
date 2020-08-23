import React from "react";

import StatusIcon from "components/StatusIcon/StatusIcon";

import { HistoryCardProps } from "./types";

import useStyles from './styles';

const HistoryCard: React.FC<HistoryCardProps> = ({ latestStatus, incident, solution, statusChangeDate }) => {
  const classes = useStyles();

  const dateFormat = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    hour12: false,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
  }

  return (
    <li className={classes[".service-history-card"]}>
      <div className={classes[".service-history-card-description"]}>
        <h3>{latestStatus}</h3>
        <p><strong>Incident:</strong> {incident}</p>
        <p><strong>Solution:</strong> {solution}</p>
        <p><strong>Date:</strong> {new Intl.DateTimeFormat('en', dateFormat).format(Date.parse(statusChangeDate))}</p>
      </div>

      <span className={`${classes[latestStatus.toLowerCase()]} ${classes[".icon"]}`}>
        <StatusIcon statusCode={latestStatus.toLowerCase()} />
      </span>
    </li>
  );
};

export default HistoryCard;
