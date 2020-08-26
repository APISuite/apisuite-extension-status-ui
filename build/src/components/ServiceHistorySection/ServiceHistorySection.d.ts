import React from "react";
import "./styles.scss";
interface ExpectedProps {
    serviceName: string;
    serviceStatusDescription: string;
    serviceStatusCode: string;
}
declare const ServiceHistorySection: React.FC<ExpectedProps>;
export default ServiceHistorySection;
