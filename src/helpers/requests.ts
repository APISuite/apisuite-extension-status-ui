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
      serviceName: "Coffee Machine",
      serviceIncidents: [
        {
          latestStatus: "Resolved",
          incident: "Requests for coffee over Wi-Fi were not being fulfilled.",
          solution: "Looked into, and fixed the machine's Wi-Fi configuration.",
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
          latestStatus: "Resolved",
          incident: "Console made some funny noises when playing.",
          solution: "Hit the thing with a hammer, quiet ever since.",
          statusChangeDate: "2020-02-10T10:24:33.354Z",
        },
      ],
    },
    {
      serviceName: "Video Scraper",
      serviceIncidents: [
        {
          latestStatus: "Investigating",
          incident: "No video scraping requests are being fulfilled.",
          solution: "Yet to be determined.",
          statusChangeDate: "2020-02-01T12:45:13.354Z",
        },
      ],
    },
    {
      serviceName: "Awesome API",
      serviceIncidents: [
        {
          latestStatus: "Investigating",
          incident: "No response from API when requesting for 'awesome'.",
          solution: "Yet to be determined.",
          statusChangeDate: "2020-01-29T16:24:33.354Z",
        }
      ],
    },
    {
      serviceName: "Beer Tap",
      serviceIncidents: [
        {
          latestStatus: "Investigating",
          incident: "Beer is coming out warm.",
          solution: "Yet to be determined.",
          statusChangeDate: "2020-01-12T09:14:53.354Z",
        }
      ],
    },
  ];

  return servicesHistory;
}

export {
  getServicesStatusData,
  getServicesHistoryData,
}