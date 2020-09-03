import React from "react";
import "./styles.scss";
interface ServiceHistoryLogs {
    latestStatus: string;
    description: string;
    statusChangeDate: string;
}
interface ExpectedProps {
    serviceName: string;
    serviceHistoryLogs: ServiceHistoryLogs[];
}
declare const ServiceHistorySection: React.FC<ExpectedProps>;
export default ServiceHistorySection;
