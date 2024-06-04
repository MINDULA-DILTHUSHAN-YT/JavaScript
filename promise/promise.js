const myPromise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error fetching data.");
    }
  }, 2000);  // Simulating a 2-second delay
});

myPromise
  .then((message) => {
    console.log(message);  // Output: Data fetched successfully!
  })
  .catch((error) => {
    console.error(error);  // Output: Error fetching data.
  })
  .finally(() => {
    console.log("Operation completed.");  // Output: Operation completed.
});

// Using async/await
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });
};

const processData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${data} and processed`), 1000);
  });
};

const asyncFunction = async () => {
  try {
    const data = await fetchData();
    console.log(data);  // Output: Data fetched
    const processedData = await processData(data);
    console.log(processedData);  // Output: Data fetched and processed
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Async operation completed.");
  }
};

asyncFunction();
