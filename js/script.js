// Menú adaptat a mòbils
const botoMenu = document.getElementById("botoMenu");
const menuPrincipal = document.getElementById("menuPrincipal");

if (botoMenu && menuPrincipal) {
    botoMenu.addEventListener("click", function () {
        const obert = menuPrincipal.parentElement.classList.toggle("obert");
        botoMenu.setAttribute("aria-expanded", String(obert));
    });

    menuPrincipal.querySelectorAll("a").forEach(function (enllac) {
        enllac.addEventListener("click", function () {
            menuPrincipal.parentElement.classList.remove("obert");
            botoMenu.setAttribute("aria-expanded", "false");
        });
    });
}

// Validació del formulari en català.
// Aquest formulari valida les dades al navegador, però no envia cap correu electrònic.
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form && formMessage) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nom = document.getElementById("nombre").value.trim();
        const correu = document.getElementById("email").value.trim();
        const assumpte = document.getElementById("asunto").value.trim();
        const missatge = document.getElementById("mensaje").value.trim();

        if (!nom || !correu || !assumpte || !missatge) {
            formMessage.textContent = "Si us plau, omple tots els camps.";
            return;
        }

        const correuCorrecte = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correuCorrecte.test(correu)) {
            formMessage.textContent = "Introdueix una adreça de correu electrònic vàlida.";
            return;
        }

        formMessage.textContent = "Formulari validat correctament. Aquest formulari és una demostració i no envia el missatge.";
        form.reset();
    });
}
