const dadosSegunda = [
    { nome: 'João', horario:"08h"},
    { nome: 'Maria', horario:"09h"},
    { nome: 'Pedro', horario:"08h"}
];

const dadosTerca = [
    { nome: 'Guilherme'},
    { nome: 'Alan'},
    { nome: 'Gustavo'}
];

const dadosQuarta = [
    { nome: 'Vinicius'},
    { nome: 'Michele'},
    { nome: 'Abner'}
];

function popularTabela(dados) {
    // Seleciona o tbody da tabela
    const tbody = document.querySelector('#tabelaAlunos tbody');

    //Limpa a tabela antes de adicionar novos dados
    // tbody.innerHTML = '';

    const tr = document.getElementById('trLinha1');

    // Itera sobre cada item da lista de dados
    dados.forEach(item => {
        // Cria uma nova linha na tabela

        // Cria e popula as células da linha
        switch(item.horario){
            case "08h":
            const tdl108h = document.getElementById('l1-08h');
            const tdl208h = document.getElementById('l2-08h');
            if(!tdl108h.textContent){
                tdl108h.textContent = item.nome;
            } else if(!tdl208h.textContent){
                tdl208h.textContent = item.nome;
            }
            break
            case "09h":
            const td09h = document.getElementById('l1-09h');
            if(!td09h.textContent){
                td09h.textContent = item.nome;
            }
            break
            case "10h":
            const td10h = document.getElementById('l1-10h');
            td10h.textContent = item.nome;
            break
        }  

        // Adiciona a linha completa no tbody
        // tbody.appendChild(tr);
    });
} 
// Função para atualizar a tabela com base na opção selecionada
function atualizarTabela() {
    const diaSelecionado = document.querySelector('#diasSelect').value;

    switch(diaSelecionado) {
        case 'segunda':
            popularTabela(dadosSegunda);
            break;
        case 'terca':
            popularTabela(dadosTerca);
            break;
        case 'quarta':
            popularTabela(dadosQuarta);
            break;
    }
}

// Adiciona um evento de mudança na combobox
document.querySelector('#diasSelect').addEventListener('change', atualizarTabela);

// Popula a tabela com a lista de dados da primeira opção por padrão
atualizarTabela();