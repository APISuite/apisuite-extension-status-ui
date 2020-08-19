function getServicesData() {
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

function getServicesHistory() {
  // Mock data, for the time being (i.e., while we don't go over this with the BE bros).
  var servicesHistory = [
    {
      serviceName: "Coffee Machine",
      logs: [
        {
          latestStatus: "Resolved",
          description: "Peaberry bean makes for some awesome coffee. This incident has thus been resolved.",
          statusChangeDate: "2020-03-28 at 13:14:03",
        },
        {
          latestStatus: "Investigating",
          description: "Using Java coffee beans gives us some terrible-tasting coffee.",
          statusChangeDate: "2020-03-27 at 21:22:53",
        }
      ],
    },
    {
      serviceName: "Playstation",
      logs: [
        {
          latestStatus: "Resolved",
          description: "Hit the thing with a hammer. Problem solved.",
          statusChangeDate: "2020-02-12 at 17:56:33",
        },
        {
          latestStatus: "Investigating",
          description: "Thermal paste perhaps in need of change.",
          statusChangeDate: "2020-02-10 at 10:24:33",
        }
      ],
    },
  ];

  return servicesHistory;

  // const URL = "https://sandbox-develop.apisuite.cloudoki.com/services/history", perhaps?

  // return fetch(URL)
  //   .then((response) => {
  //     if (response.status !== 200) {
  //       console.log("We ran into some issues:", response.status);
  //       return;
  //     }

  //     // If we don't run into any issues, we parse the response into JSON, (...)
  //     return response.json();
  //   })
  //   .then((jsonData) => {
  //     // (...) and then we return it.
  //     return jsonData;
  //   })

  //   .catch((error) => {
  //     console.log("An error occurred:", error);
  //   });
}

export {
  getServicesData,
  getServicesHistory,
}