function addingEventListener() {
    // Define the function that will handle the event
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Select the element by ID
    const input = document.getElementById('button');
  
    // Attach a click event listener to the element
    input.addEventListener('click', clickAlert);
  }
  
  // Call the addingEventListener function to set up the event listener
  addingEventListener();
  

