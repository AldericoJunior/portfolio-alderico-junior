// ================= FORMULÁRIO =================

// Captura o formulário
const formulario = document.getElementById("formulario");

// Verifica se o formulário existe na página
if(formulario){

    formulario.addEventListener("submit", function(event){

        // Impede envio real
        event.preventDefault();

        // Captura valores
        const nome = document.getElementById("nome").value.trim();

        const email = document.getElementById("email").value.trim();

        const mensagem = document.getElementById("mensagem").value.trim();


        // Validação de campos vazios
        if(nome === "" || email === "" || mensagem === ""){

            alert("Preencha todos os campos.");

            return;
        }


        // Validação simples de e-mail
        const emailValido = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

        if(!emailValido.test(email)){

            alert("Digite um e-mail válido.");

            return;
        }


        // Simulação de envio
        alert("Mensagem enviada com sucesso!");

        // Limpa formulário
        formulario.reset();

    });

}
