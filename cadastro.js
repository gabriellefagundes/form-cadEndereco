'use strict'; // Modo restrito
// Este modo faz com que o JavaScript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
/* Consumo de API - https://viacep.com.br/ */
 
// Função para limpar formulário
const limparFormulario = () =>{
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('estado').value = '';
}
 
// Função para preencher formulário como campos da API
const preencherFormulario = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}
 
// cria regra de expressão regular (Regex) para testar valor informado pelo usuário
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
// Função de consumo de API ViaCEP
const pesquisarCep = async() =>{
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
 
    if(cepValido(cep.value)){
        const dados  = await fetch(url);
        const addres = await dados.json();
 
        if(addres.hasOwnProperty('erro')){
            alert('CEP Não encontrado');  
        }else{
            preencherFormulario(addres);
        }
    }else{
        alert("CEP Incorreto!");
    }
}
 
// Adiciona escutador para executar consumo de API da ViaCEP
document.getElementById('cep').addEventListener('focusout', pesquisarCep);