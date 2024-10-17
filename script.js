document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const usernameInput = document.getElementById('username');
    const displayName = document.getElementById('display-name');
    const welcomeMessage = document.getElementById('welcome-message'); 

  
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting for now
        const enteredName = usernameInput.value; // Get the value of the username
        if (enteredName.trim() !== "") { // Checking if input is not empty for this username field
            displayName.textContent = `Your username is: ${enteredName}`; // Display the username like "ilia"
            welcomeMessage.textContent = `Welcome, ${enteredName}!`; // Update the welcome message. h1 style included. Changing it to p1 for evaluation?
        } else {
            displayName.textContent = "Please enter a valid username.";
            welcomeMessage.textContent = "Welcome, User!";
        }
    });

    
    form.addEventListener('reset', function() {
        displayName.textContent = ''; // Clear the displayed name and replace it with ' '
        welcomeMessage.textContent = "Welcome, User!"; 
    });
});
