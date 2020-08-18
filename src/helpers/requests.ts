function getStatusData() {
  const URL = "https://sandbox-develop.apisuite.cloudoki.com/services"

  fetch(URL)
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
      console.log("Current services data (getStatusData): ", jsonData);
      return jsonData;
    })

    .catch((error) => {
      console.log("An error occurred:", error);
    });
}

export default getStatusData