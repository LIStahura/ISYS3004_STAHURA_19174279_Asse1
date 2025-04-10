document.getElementById('fetchButton').addEventListener('click', () => {
  const selectedOption = document.getElementById('dataSelector').value; // Get selected value
  const apiUrl = `https://jsonplaceholder.typicode.com/${selectedOption}`; // Construct API URL

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const dataDiv = document.getElementById('data');
      dataDiv.innerHTML = ''; // Clear previous data

      if (data.length > 0) {
        data.forEach(item => {
          const itemElement = document.createElement('p');
          itemElement.textContent = selectedOption === 'users' ? item.name : item.title || item.body;
          dataDiv.appendChild(itemElement);
        });
      } else {
        dataDiv.innerHTML = '<p>No data found.</p>';
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('data').innerHTML = '<p>Sorry, an error occurred while fetching data.</p>';
    });
});

