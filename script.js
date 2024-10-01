// Funkcja do przełączania menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        hamburger.style.display = 'flex';
    } else {
        menu.classList.add('open');
        hamburger.style.display = 'none';
    }
}

// Funkcja do ustawienia domyślnego motywu
function setDefaultTheme() {
    document.body.classList.add('dark-theme'); // Ustawienie motywu ciemnego jako domyślnego
}

// Funkcja do renderowania treści na stronie głównej
function renderHomePage() {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `<h2>Strona Główna</h2><p>Witaj na stronie głównej!</p>`;
}

// Ustawienie domyślnego motywu przy ładowaniu strony
setDefaultTheme();
renderHomePage(); // Renderowanie treści na stronie głównej przy załadowaniu

document.getElementById('settings').addEventListener('click', function() {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `
        <h2>Ustawienia</h2>
        <div>
            <label for="theme">Wybierz motyw:</label>
            <select id="theme">
                <option value="light">Jasny</option>
                <option value="dark" selected>Ciemny</option>
            </select>
        </div>
        <div>
            <label for="language">Wybierz język:</label>
            <select id="language">
                <option value="pl">Polski</option>
                <option value="en">Angielski</option>
            </select>
        </div>
    `;
    toggleMenu();  // Zamknięcie menu po kliknięciu w "Ustawienia"

    // Dodajemy nasłuchiwacz zdarzeń dla wyboru motywu
    document.getElementById('theme').addEventListener('change', function() {
        if (this.value === 'light') {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        } else {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        }
    });
});

// Obsługa kliknięcia w "Strona główna"
document.getElementById('home').addEventListener('click', function() {
    renderHomePage(); // Renderowanie treści na stronie głównej
    toggleMenu();  // Zamknięcie menu po kliknięciu w "Strona główna"
});
