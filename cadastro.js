'use strict'; // Ativa o modo restrito para evitar erros e deixar o código mais seguro

/* Fazendo o consumo da API ViaCEP - https://viacep.com.br/ */

//
// Função para limpar os campos do formulário
// Uso essa função para garantir que os campos de endereço estejam sempre vazios antes de preencher com os novos dados
//
const limparFormulario = () => {
    document.getElementById('logradouro').value = '';  // Limpa o campo 'logradouro'
    document.getElementById('bairro').value = '';      // Limpa o campo 'bairro'
    document.getElementById('localidade').value = '';  // Limpa o campo 'localidade'
    document.getElementById('estado').value = '';      // Limpa o campo 'estado'
}

//
// Essa função preenche os campos do formulário com as informações que a API retornar
// Ela recebe o objeto 'endereco' com os dados do CEP e preenche os campos corretos
//
const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro; // Preenche 'logradouro'
    document.getElementById('bairro').value = endereco.bairro;         // Preenche 'bairro'
    document.getElementById('localidade').value = endereco.localidade; // Preenche 'localidade'
    document.getElementById('estado').value = endereco.uf;             // Preenche 'estado'
}

//
// Criei uma função que testa se o valor digitado pelo usuário é só composto por números, usando Regex
//
const eNumero = (numero) => /^[0-9]+$/.test(numero);

//
// Essa função valida se o CEP tem 8 dígitos e se são todos números
//
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//
// Função principal para consumir a API ViaCEP
// Ela limpa o formulário, monta a URL da API e faz a requisição
//
const pesquisarCep = async() => {
    limparFormulario();  // Limpa os campos antes de fazer a pesquisa

    // Monta a URL da API com o CEP informado no formulário
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;

    // Verifica se o CEP digitado tem o formato correto
    if (cepValido(cep.value)) {
        const dados = await fetch(url);  // Faz a requisição para a API ViaCEP
        const addres = await dados.json();  // Converte a resposta da API em JSON

        // Caso o CEP não exista, mostro um alerta
        if (addres.hasOwnProperty('erro')) {
            alert('CEP Não encontrado');
        } else {
            preencherFormulario(addres);  // Caso contrário, preencho o formulário com os dados retornados
        }
    } else {
        alert("CEP Incorreto!");  // Se o CEP for inválido, mostro um alerta
    }
}

// Adiciono um evento para quando o campo de CEP perder o foco, chamar a função pesquisarCep
document.getElementById('cep').addEventListener('focusout', pesquisarCep);
