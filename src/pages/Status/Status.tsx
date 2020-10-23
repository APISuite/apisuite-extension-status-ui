import React from "react";

import ServiceCard from "components/ServiceCard";
import ServiceHistory from "components/ServiceHistory";

import { getServicesStatusData, getServicesHistoryData } from "helpers/requests";

import useStyles from "./styles";

const Status: React.FC = () => {
  const classes = useStyles();

  const [servicesStatusData, setServicesStatusData] = React.useState([]);
  const [servicesHistoryData, setServicesHistoryData] = React.useState([]);

  const servicesStatusCards = servicesStatusData.map((serviceStatusData, index) => {
    return (
      <ServiceCard
        key={`serviceCard${index}`}
        serviceName={serviceStatusData.name}
        serviceStatusDescription={serviceStatusData.status}
        serviceStatusCode={serviceStatusData.code}
      />
    );
  });

  const servicesHistory = servicesHistoryData.map((serviceHistoryData, index) => {
    return (
      <ServiceHistory
        key={`serviceHistory${index}`}
        serviceName={serviceHistoryData.serviceName}
        serviceHistoryIncidents={serviceHistoryData.serviceIncidents}
      />
    );
  });

  React.useEffect(() => {
    const fetchingOfServicesStatusData = async () => {
      const currentServicesData = await getServicesStatusData();

      setServicesStatusData(currentServicesData || []);
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
    <main className={`page-container ${classes.pageWrap}`}>
      <section className={classes.currentStatusSection}>
        <div className={classes.sectionTitleContainer}>
          <h2 className={classes.sectionTitle}>Current status per service</h2>
        </div>

        <div>
          {servicesStatusCards.length > 0 ? <ul>{servicesStatusCards}</ul> : <p>No services currently in use.</p>}
        </div>
      </section>

      <section className={classes.pastIncidentsSection}>
        <div className={classes.sectionTitleContainer}>
          <h2 className={classes.sectionTitle}>Past incidents</h2>
        </div>

        <div>
          {servicesHistory.length > 0 ? <ul>{servicesHistory}</ul> : <p>No services' history to show.</p>}
        </div>
      </section>
    </main>
  );
};

export default Status;
