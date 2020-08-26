interface ServiceHistoryIncidents {
    latestStatus: string;
    incident: string;
    solution: string;
    statusChangeDate: string;
}
export declare type ServiceHistoryProps = {
    serviceName: string;
    serviceHistoryIncidents: ServiceHistoryIncidents[];
};
export {};
