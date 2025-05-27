function openMenu() {
    document.getElementById("sidebar").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closeMenu() {
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}
const openPopupBtn = document.getElementById('openPopup');
const closePopupBtn = document.getElementById('closePopup');
const popup = document.getElementById('popup');

// Show popup when button is clicked
openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

// Close popup when close button is clicked
closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close popup when clicking outside the popup content
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});