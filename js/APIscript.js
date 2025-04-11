let fetchedData = []; // Variable to store fetched data
let currentIndex = 0; // Variable to track the current index

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    fetchedData = data; // Store the fetched data
    console.log(data); // Log the data for inspection
    const dataDiv = document.getElementById('data');
    if (data.length > 0) {
      dataDiv.innerHTML = '<h2>' + data[0].title + '</h2>'; // Display the first item initially
    } else {
      dataDiv.innerHTML = '<p>No data found.</p>';
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    document.getElementById('data').innerHTML = '<p>Sorry, an error occurred while fetching data.</p>';
  });

// Add event listener to the button for switching through items
document.getElementById('switchButton').addEventListener('click', () => {
  if (fetchedData.length > 0) {
    currentIndex = (currentIndex + 1) % fetchedData.length; // Increment index and loop back to the start
    const currentItem = fetchedData[currentIndex]; // Get the current item
    document.getElementById('data').innerHTML = '<h2>' + currentItem.title + '</h2>'; // Display the current item
  } else {
    document.getElementById('data').innerHTML = '<p>No data available to display.</p>';
  }
});

