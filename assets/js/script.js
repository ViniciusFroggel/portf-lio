// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const themeButton = document.querySelector('.theme-toggle');
    if (document.body.classList.contains('light-theme')) {
        themeButton.textContent = '🌞';
    } else {
        themeButton.textContent = '🌙';
    }
}

// Popup Welcome
window.addEventListener('load', () => {
    showPopup();
});

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Navbar Mobile Toggle
function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}
