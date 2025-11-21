document.addEventListener('DOMContentLoaded', function () {
    // Theme toggle button functionality
    const themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            window.location.href = 'personal.html';
        });
    }
});
