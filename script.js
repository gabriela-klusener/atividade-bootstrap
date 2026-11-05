document.addEventListener("DOMContentLoaded", function () {
    const elementoModal = document.getElementById("modalAviso");
    const modal = new bootstrap.Modal(elementoModal);
    modal.show();
});


const formulario = document.getElementById("formAgendamento");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const nome = document.getElementById("nome").value;
    alert("Solicitação recebida! Obrigado, " + nome + ".");
    formulario.reset();
});

