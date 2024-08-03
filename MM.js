function showDropdown() {
  document.querySelector('.dropdown-content').style.display = 'block';
}

function hideDropdown() {
  document.querySelector('.dropdown-content').style.display = 'none';
}

// Show content for the selected class group
document.getElementById('class-I-IV').addEventListener('click', function() {
  showContent('class-I-IV');
});

document.getElementById('class-V-IX').addEventListener('click', function() {
  showContent('class-V-IX');
});

document.getElementById('class-X-XII').addEventListener('click', function() {
  showContent('class-X-XII');
});

function showContent(classGroup) {
  // Hide all content sections
  document.querySelectorAll('.content').forEach(function(content) {
    content.style.display = 'none';
  });

  // Show content section for the selected class group
  document.getElementById('content-' + classGroup).style.display = 'block';
}