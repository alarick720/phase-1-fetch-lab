function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      // Parse the JSON response
      return response.json();
    }) // To pass the tests, don't forget to return your fetch!
  
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
function fetchBooks() {
  // Return the fetch Promise so that .then() can be called on it
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      // Check if the response is ok (status code 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Parse JSON body of the response
    })
    .then(data => {
      renderBooks(data); // Call renderBooks with the parsed data
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

// Example usage of fetchBooks, which returns a Promise
fetchBooks().then(() => {
  console.log('Books have been fetched and rendered');
});
