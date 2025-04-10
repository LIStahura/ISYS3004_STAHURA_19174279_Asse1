// Use fetch() to retrieve data from a public API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
   // Convert the response to JSON
    return response.json();
    })
.   then(data => {
        // Log the data to the console for inspection
        console.log(data);
        // Select the 'data' div to display content
        const dataDiv = document.getElementById('data');
        // For this example, we simply display the title of the first post
        if (data.length > 0) {
          dataDiv.innerHTML = '<h2>' + data[0].title + '</h2>';
        } else {
          dataDiv.innerHTML = '<p>No data found.</p>';
        }
      })
// Handle any errors that occur during the fetch
     .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('data').innerHTML = '<p>Sorry, an error occurred while fetching data.</p>';
    });      