const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !asunto || !mensaje) {

        formMessage.textContent =
            "Por favor, completa todos los campos.";

        return;
    }

    const emailCorrecto =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailCorrecto.test(email)) {

        formMessage.textContent =
            "Introduce un correo electrónico válido.";

        return;
    }

    formMessage.textContent =
        "Formulario validado correctamente.";

    form.reset();
});