// Main imports
import React from "react";
import getStatusData from "../../helpers/requests";

// Component imports
import ServiceCard from "../../components/ServiceCard";

// Styling imports
import "./styles.scss";

const Status: React.FC = () => {
  const [servicesData, setServicesData] = React.useState([]);
  const [servicesCards, setServicesCards] = React.useState([]);

  React.useEffect(() => {
    const currentServicesData = getStatusData();

    console.log("Current services data (Status component): ", currentServicesData);
  }, [getStatusData]);

  React.useEffect(() => {
    const fakeServicesData = [
      { name: "Coffee Machine", status: "Healthy", code: "working" },
      { name: "Playstation", status: "Healthy", code: "working" },
      { name: "Video Scraper", status: "Unhealthy", code: "notworking" },
      { name: "Awesome API", status: "Degraded", code: "issues" },
      { name: "Beer Tap", status: "Degraded", code: "issues" }
    ];

    const servicesCards = fakeServicesData.map((service) => {
      return (
        <ServiceCard
          serviceName={service.name}
          serviceStatusDescription={service.status}
          serviceStatusCode={service.code}
        />
      );
    })

    setServicesCards(servicesCards);
  }, [servicesData]);

  return (
    <main className="page-wrap wrap">
      <section className="current-status">
        <div className="section-title">
          <h2>Current status per service</h2>
        </div>

        <div id="services-root">
          <ul>{servicesCards}</ul>
        </div>
      </section>

      <section className="past-incidents">
        <div className="section-title">
          <h2>Past incidents</h2>
        </div>
      </section>
    </main>
  );
}

export default Status;
