const interactiveWindow = document.getElementById('interactiveWindow');
const loginButton = document.getElementById('loginButton');
const loginContainer = document.getElementById('loginContainer');

loginButton.addEventListener('click', function() {
    interactiveWindow.style.display = 'none';
    loginContainer.style.display = 'block';
});

loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    // Perform login process here
    alert('Login successful!'); // For demonstration purposes
});