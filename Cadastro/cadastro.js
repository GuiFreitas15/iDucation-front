// Função para salvar os dados do formulário na sessão do usuário
function salvarDadosDoFormulario() {
    // Obtenha os valores dos campos do formulário
    var nome = document.getElementById("nomeCompleto").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var documento = document.getElementById("documento").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var nome = document.getElementById("nomeCompletoResponsavel").value;
    var documentoResponsavel = document.getElementById("documentoResponsavel").value;
    var telefoneResponsavel = document.getElementById("telefoneResponsavel").value;
    var email = document.getElementById("emailResponsavel").value;
    var cep = document.getElementById("cep").value;
    var endereco = document.getElementById("endereco").value;
    var numero = document.getElementById("numero").value;
    var bairro = document.getElementById("bairro").value;
    var estado = document.getElementById("estado").value;

    // Crie um objeto para armazenar os dados do formulário
    var dadosDoFormulario = {
        "nomeCompleto": nome,
        "dataNascimento": dataNascimento,
        "documento": documento,
        "telefone": telefone,
        "email": email,
        "nomeCompletoResponsavel": nomeCompletoResponsavel,
        "documentoResponsavel": documentoResponsavel,
        "emailResponsavel": emailResponsavel,
        "telefoneResponsavel": telefoneResponsavel,
        "cep": cep,
        "endereco": endereco,
        "numero": numero,
        "bairro": bairro,
        "estado": estado,
    };

    // Converta o objeto em uma string JSON
    var dadosJSON = JSON.stringify(dadosDoFormulario);

    // Salve os dados na sessão do usuário
    sessionStorage.setItem("dadosDoFormulario", dadosJSON);
}

// Função para carregar e exibir os dados salvos do formulário
function exibirDadosSalvosDoFormulario() {
    // Verifique se existem dados salvos na sessão do usuário
    if (sessionStorage.getItem("dadosDoFormulario")) {
        // Obtenha os dados salvos da sessão do usuário
        var dadosJSON = sessionStorage.getItem("dadosDoFormulario");

        // Converta os dados JSON de volta para um objeto JavaScript
        var dadosDoFormulario = JSON.parse(dadosJSON);

        // Exiba os dados salvos nos campos do formulário

        document.getElementById("nomeCompleto").value = dadosDoFormulario.nomeCompleto;
        document.getElementById("dataNascimento").value = dadosDoFormulario.dataNascimento;
        document.getElementById("documento").value = dadosDoFormulario.documento;
        document.getElementById("telefone").value = dadosDoFormulario.telefone;
        document.getElementById("email").value = dadosDoFormulario.email;
        document.getElementById("nomeCompletoResponsavel").value = dadosDoFormulario.nomeCompletoResponsavel;
        ntoResponsavel = document.getElementById("documentoResponsavel").value = dadosDoFormulario.documentoResponsavel;
        neResponsavel = document.getElementById("telefoneResponsavel").value = dadosDoFormulario.telefoneResponsavel;
        document.getElementById("emailResponsavel").value = dadosDoFormulario.emailResponsavel;
        document.getElementById("cep").value = dadosDoFormulario.cep;
        co = document.getElementById("endereco").value = dadosDoFormulario.endereco;
        document.getElementById("numero").value = dadosDoFormulario.numero;
        document.getElementById("bairro").value = dadosDoFormulario.bairro;
        document.getElementById("estado").value = dadosDoFormulario.estado;
    }
}

// Chame a função para exibir os dados salvos quando a página for carregada
window.onload = exibirDadosSalvosDoFormulario;