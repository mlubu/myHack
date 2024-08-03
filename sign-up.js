const interactiveWindow = document.getElementById('interactiveWindow');
const signupButton = document.getElementById('signupButton');
const signupContainer = document.getElementById('signupContainer');
const registrationContainer = document.getElementById('registrationContainer');
const registrationForm = document.getElementById('registrationForm');

signupButton.addEventListener('click', function() {
  interactiveWindow.style.display = 'none';
  signupContainer.style.display = 'block';
});

signupForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  signupContainer.style.display = 'none';
  registrationContainer.style.display = 'block';
});

registrationForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  alert('Registration successful!'); // For demonstration purposes
});