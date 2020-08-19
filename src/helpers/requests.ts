function getServicesStatusData() {
  const URL = "https://sandbox-develop.apisuite.cloudoki.com/services"

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
      serviceName: "Coffee Machine",
      serviceIncidents: [
        {
          latestStatus: "Resolved",
          incident: "Java coffee beans makes for some odd-tasting coffee.",
          solution: "Started using Peaberry coffee beans.",
          statusChangeDate: "2020-03-28T13:14:03.354Z",
        },
        {
          latestStatus: "Investigating",
          incident: "Machine makes an odd sound when preparing coffee.",
          solution: "Yet to be determined.",
          statusChangeDate: "2020-03-27T21:22:53.354Z",
        },
      ],
    },
    {
      serviceName: "Playstation",
      serviceIncidents: [
        {
          latestStatus: "Investigating",
          incident: "Everyone in the office (except me ofc) sucks at FIFA.",
          solution: "Yet to be determined.",
          statusChangeDate: "2020-02-10T10:24:33.354Z",
        },
      ],
    },
  ];

  return servicesHistory;
}

export {
  getServicesStatusData,
  getServicesHistoryData,
}