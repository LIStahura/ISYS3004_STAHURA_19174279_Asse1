// Use fetch() to retrieve data from a public API
fetch('https://jsonplaceholder.typicode.com/users')  // Changed endpoint
  .then(response => response.json())
  .then(data => {
    // Update this part to handle user data
    const dataDiv = document.getElementById('data');
    if (data.length > 0) {
      dataDiv.innerHTML = '<h2>' + data[0].name + '</h2>';  // Changed property
    } else {
      dataDiv.innerHTML = '<p>No data found.</p>';
    }
  })
.catch(error => {
    console.error('Error fetching data:', error);
  });