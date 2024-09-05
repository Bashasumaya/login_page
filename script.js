document.addEventListener('DOMContentLoaded', function() {
    const downloadResumeButton = document.getElementById('submit');
    
    downloadResumeButton.addEventListener('click', function() {
        
    // Hardcoded credentials for demonstration
    const correctUsername = "admin";
    const correctPassword = "123";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const errorMessage = document.getElementById("error-message");

    if (username === correctUsername && password === correctPassword) {
        errorMessage.textContent="Login successful!";
        errorMessage.style.display = "block";
        errorMessage.style.color="green";
    } else {
        errorMessage.textContent = "Invalid username or password.";
        errorMessage.style.display = "block";
    
    }
});
});