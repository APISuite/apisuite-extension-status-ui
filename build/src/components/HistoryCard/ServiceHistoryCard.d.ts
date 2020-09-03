import React from "react";
import "./styles.scss";
interface ExpectedProps {
    latestStatus: string;
    description: string;
    statusChangeDate: string;
}
declare const ServiceHistoryCard: React.FC<ExpectedProps>;
export default ServiceHistoryCard;
