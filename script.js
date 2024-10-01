// Funkcja do przełączania widoczności menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');

    // Sprawdzamy, czy menu jest otwarte
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');  // Zamykamy menu
        hamburger.classList.remove('hidden'); // Pokazujemy hamburgera
    } else {
        menu.classList.add('open');  // Otwieramy menu
        hamburger.classList.add('hidden');  // Ukrywamy hamburgera
    }
}
