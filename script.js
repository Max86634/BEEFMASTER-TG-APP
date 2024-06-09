
window.addEventListener("DOMContentLoaded", (event) => {
  
    // Get the image and counter elements
  const image = document.getElementById('coin');
  const counter = document.getElementById('counter');

  // Create a variable to store the number of punches
  let punches = 0;

  // Add an event listener for the click event on the image
  image.addEventListener('click', () => {
    // Increment the number of punches
    punches++;

    // Update the counter element with the new number of punches
    counter.textContent = punches +" "+ "шашлыков";
  });


});

