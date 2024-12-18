const darkmode = document.getElementById('darkmode');
const toggleBg = document.getElementById('toggle-bg');
const toggleCircle = document.getElementById('toggle-circle');
const targetdarkmode = document.getElementById('targetdarkmode');
const icontheme = document.getElementById('icontheme');

if (localStorage.getItem('darkmode') === 'enabled') {
    darkmode.checked = true;
    enableDarkMode();
} else {
    darkmode.checked = false;
    disableDarkMode();
}

darkmode.addEventListener('change', () => {
    if (darkmode.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
function enableDarkMode() {
    toggleBg.classList.remove('bg-gray-500');
    toggleBg.classList.add('bg-white');
    toggleCircle.classList.add('translate-x-full', 'bg-gray-700');
    targetdarkmode.classList.add('dark', 'transition-all', 'duration-150');
    localStorage.setItem('darkmode', 'enabled');
}
function disableDarkMode() {
    toggleBg.classList.remove('bg-white');
    toggleBg.classList.add('bg-gray-500');
    toggleCircle.classList.remove('translate-x-full', 'bg-gray-700');
    targetdarkmode.classList.remove('dark', 'transition-all', 'duration-150');
    localStorage.setItem('darkmode', 'disabled');
}
const navLinks = document.querySelectorAll('aside a');
const sections = document.querySelectorAll('#home, #about, #project, #timeline'); // Ambil semua section

function updateActiveLink() {
    let currentSection = '';

    // Loop melalui setiap section untuk mengecek posisi scroll
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Jika posisi scroll ada dalam area section, set section saat ini
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Update kelas 'nav-active' pada navigasi
    navLinks.forEach(link => {
        link.classList.remove('nav-active'); // Hapus semua kelas aktif
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('nav-active'); // Tambahkan kelas aktif ke link yang sesuai
        }
    });
}

// Tambahkan event listener untuk scroll
window.addEventListener('scroll', updateActiveLink);

