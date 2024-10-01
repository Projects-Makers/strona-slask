function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    const closeBtn = document.querySelector('.close-btn');

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        hamburger.style.display = 'flex';
    } else {
        menu.classList.add('open');
        hamburger.style.display = 'none';
    }
}
