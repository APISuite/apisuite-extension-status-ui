// Main imports
import React from "react";
import { getServicesData, getServicesHistory } from "../../helpers/requests";

// Component imports
import ServiceCard from "../../components/ServiceCard";
import ServiceHistorySection from "../../components/ServiceHistorySection";

// Styling imports
import "./styles.scss";

const Status: React.FC = () => {
  const [servicesData, setServicesData] = React.useState([]);
  const [servicesHistory, setServicesHistory] = React.useState([]);
  const [servicesCards, setServicesCards] = React.useState([]);
  const [servicesHistorySections, setServicesHistorySections] = React.useState([]);

  /* 1 - Fetching of relevant data */

  React.useEffect(() => {
    const fetchingOfServicesData = async () => {
      const currentServicesData = await getServicesData();

      setServicesData(currentServicesData);
    };

    fetchingOfServicesData();
  }, []);

  React.useEffect(() => {
    const fetchingOfServicesHistory = async () => {
      const currentServicesHistory = await getServicesHistory();

      setServicesHistory(currentServicesHistory);
    };

    fetchingOfServicesHistory();
  }, []);

  /* 2 - Component construction based on fetched data */

  React.useEffect(() => {
    const servicesCards = servicesData.map((serviceData) => {
      return (
        <ServiceCard
          serviceName={serviceData.name}
          serviceStatusDescription={serviceData.status}
          serviceStatusCode={serviceData.code}
        />
      );
    });

    setServicesCards(servicesCards);
  }, [servicesData]);

  React.useEffect(() => {
    const servicesHistorySections = servicesHistory.map((serviceHistory) => {
      return (
        <ServiceHistorySection
          serviceName={serviceHistory.name}
          serviceStatusDescription={serviceHistory.status}
          serviceStatusCode={serviceHistory.code}
        />
      );
    });

    setServicesHistorySections(servicesHistorySections);
  }, [servicesHistory]);

  return (
    <main className="page-wrap wrap">
      <section className="current-status">
        <div className="section-title">
          <h2>Current status per service</h2>
        </div>

        <div>
          <ul>{servicesCards}</ul>
        </div>
      </section>

      <br />

      <section className="past-incidents">
        <div className="section-title">
          <h2>Past incidents</h2>
        </div>

        <div>
          {servicesHistorySections}
        </div>
      </section>
    </main>
  );
}

export default Status;
