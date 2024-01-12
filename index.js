// Function to make an HTTP request using Fetch API
const fetchData = (url) => {
    return new Promise((resolve, reject) => {
      // Using the Fetch API to make an HTTP GET request
      fetch(url)
        .then((response) => {
          // Checking if the response status is OK (status code 200-299)
          if (response.ok) {
            // If successful, parse the response as JSON and resolve the Promise
            return response.json();
          } else {
            // If not successful, reject the Promise with an error message
            reject(`Error: ${response.status} - ${response.statusText}`);
          }
        })
        .then((data) => {
          // Resolve the Promise with the parsed data
          resolve(data);
        })
        .catch((error) => {
          // If there is any error during the process, reject the Promise with the error
          reject(`Fetch error: ${error}`);
        });
    });
  };
  
  // Example usage:
  
  // Calling the fetchData function with the API URL
  fetchData(apiUrl)
    .then((data) => {
      // Handling the resolved data
      console.log("Fetched data:", data);
    })
    .catch((error) => {
      // Handling the rejected error
      console.error("Error during fetch:", error);
    });
  