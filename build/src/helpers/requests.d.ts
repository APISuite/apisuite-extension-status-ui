declare function getServicesStatusData(): Promise<any>;
declare function getServicesHistoryData(): {
    serviceName: string;
    serviceIncidents: {
        latestStatus: string;
        incident: string;
        solution: string;
        statusChangeDate: string;
    }[];
}[];
export { getServicesStatusData, getServicesHistoryData, };
