// ================= MENU RESPONSIVO =================
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});


// ================= TEMA ESCURO =================
const temaBtn = document.getElementById("tema-btn");

temaBtn.addEventListener("click", () => {

    // Adiciona ou remove a classe dark
    document.body.classList.toggle("dark");

    // Troca ícone
    if (document.body.classList.contains("dark")) {
        temaBtn.textContent = "☀️";
    } else {
        temaBtn.textContent = "🌙";
    }
});


// ================= FORMULÁRIO =================
const formulario = document.getElementById("formulario");
const retorno = document.getElementById("retorno");

formulario.addEventListener("submit", function(event) {

    // Impede envio real
    event.preventDefault();

    // Captura campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();


    // Verifica campos vazios
    if (nome === "" || email === "" || mensagem === "") {

        retorno.textContent = "Preencha todos os campos.";
        retorno.style.color = "red";

        return;
    }


    // Validação simples de e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {

        retorno.textContent = "Digite um e-mail válido.";
        retorno.style.color = "red";

        return;
    }


    // Simulação de envio
    retorno.textContent = "Mensagem enviada com sucesso!";
    retorno.style.color = "green";


    // Limpa formulário
    formulario.reset();
});
