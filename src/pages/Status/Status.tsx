import React from "react";

import ServiceCard from "components/ServiceCard";
import ServiceHistory from "components/ServiceHistory";

import { getServicesStatusData, getServicesHistoryData } from "helpers/requests";

import "./styles.scss";

const Status: React.FC = () => {
  const [servicesStatusData, setServicesStatusData] = React.useState([]);
  const [servicesHistoryData, setServicesHistoryData] = React.useState([]);

  const servicesStatusCards = servicesStatusData.map((serviceStatusData, index) => {
    return (
      <ServiceCard
        key={index}
        serviceName={serviceStatusData.name}
        serviceStatusDescription={serviceStatusData.status}
        serviceStatusCode={serviceStatusData.code}
      />
    );
  });

  const servicesHistory = servicesHistoryData.map((serviceHistoryData, index) => {
    return (
      <ServiceHistory
        key={index}
        serviceName={serviceHistoryData.serviceName}
        serviceHistoryIncidents={serviceHistoryData.serviceIncidents}
      />
    );
  });

  React.useEffect(() => {
    const fetchingOfServicesStatusData = async () => {
      const currentServicesData = await getServicesStatusData();

      setServicesStatusData(currentServicesData);
    };

    fetchingOfServicesStatusData();
  }, []);

  React.useEffect(() => {
    const fetchingOfServicesHistoryData = async () => {
      const currentServicesHistory = await getServicesHistoryData();

      setServicesHistoryData(currentServicesHistory);
    };

    fetchingOfServicesHistoryData();
  }, []);

  return (
    <main className="page-wrap wrap">
      <section className="current-status">
        <div className="section-title">
          <h2>Current status per service</h2>
        </div>

        <div>
          {servicesStatusCards.length > 0 ? <ul>{servicesStatusCards}</ul> : <p>No services currently in use.</p>}
        </div>
      </section>

      <br />

      <section className="past-incidents">
        <div className="section-title">
          <h2>Past incidents</h2>
        </div>

        <div>
          {servicesHistory.length > 0 ? <ul>{servicesHistory}</ul> : <p>No services' history to show.</p>}
        </div>
      </section>
    </main>
  );
}

export default Status;
