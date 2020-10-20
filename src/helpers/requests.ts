import config from "./config";

function getServicesStatusData() {
  const URL = config().servicesStatusDataUrl;

  return fetch(URL)
    .then((response) => {
      if (response.status !== 200) {
        console.log("We ran into some issues:", response.status);
        return;
      }

      // If we don't run into any issues, we parse the response into JSON, (...)
      return response.json();
    })
    .then((jsonData) => {
      // (...) and then we return it.
      return jsonData;
    })

    .catch((error) => {
      console.log("An error occurred:", error);
    });
}

function getServicesHistoryData() {
  // Mock data, for the time being (i.e., while we don't go over this with the BE bros).
  var servicesHistory = [
    {
      serviceName: "vets",
      serviceIncidents: [
        {
          latestStatus: "Resolved",
          incident: "Requests made to this service were not being fulfilled.",
          solution: "Looked into, and fixed the service's configuration.",
          statusChangeDate: "2020-09-03T11:14:03.354Z",
        },
        {
          latestStatus: "Investigating",
          incident: "Service completely stopped working for several hours.",
          solution: "Yet to be determined.",
          statusChangeDate: "2020-09-01T20:22:53.354Z",
        },
      ],
    }
  ];

  return servicesHistory;
}

export {
  getServicesStatusData,
  getServicesHistoryData,
}
