
// ========================================
// 1. CARREGAR ÍCONES
// ========================================

function renderIcons() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

renderIcons();

// ========================================
// 2. MENU PARA CELULARES
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );

        menuToggle.innerHTML = isOpen
            ? '<i data-lucide="x"></i>'
            : '<i data-lucide="menu"></i>';

        renderIcons();
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");

            menuToggle.innerHTML = '<i data-lucide="menu"></i>';

            renderIcons();
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            nav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");

            menuToggle.innerHTML = '<i data-lucide="menu"></i>';

            renderIcons();
        }
    });
}

// ========================================
// 3. ANO AUTOMÁTICO NO RODAPÉ
// ========================================

const yearElement = document.querySelector("#current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}