const toggleButton = document.getElementById('modeToggle');

// Check localStorage for saved preference
if (localStorage.getItem('mode') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.checked = true;
} else {
    document.body.classList.add('light-mode');
}

// Add event listener for the toggle button
toggleButton.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark');  // Save the preference in localStorage
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('mode', 'light');  // Save the preference in localStorage
    }
});
