// Set active link color
switch (window.location.pathname) {
    case '/':
        document.querySelector('#articles').classList.add('active');
        break;
    case '/resources/':
        document.querySelector('#resources').classList.add('active');
        break;
    case '/about/':
        document.querySelector('#about').classList.add('active');
        break;
}

// Handel mobile menu visibility
const navDropdownBtn = document.querySelector('.nav-dropdown-btn');
const navDropdown = document.querySelector('.nav-bar');

navDropdownBtn.addEventListener('click', () => navDropdown.classList.toggle('hidden'));