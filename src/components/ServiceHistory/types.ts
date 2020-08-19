
interface ServiceHistoryIncidents {
  latestStatus: string,
  incident: string,
  solution: string,
  statusChangeDate: string,
};

export type ServiceHistoryProps = {
  serviceName: string,
  serviceHistoryIncidents: ServiceHistoryIncidents[],
};
