'use strict';//Modo restrito
// Este modo faz com o que JavaScript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
/* Consumo de API - https://viacep.com.br/*/
 
// Função para limpar formulário
const LimparFormulario = ()=>{
   document.getElementById('CEP').value = '';
   document.getElementById('Logradouro').value = '';
   document.getElementById('Bairro').value = '';
   document.getElementById('UF').value = '';
   
}
// Função para validar apenas números
const eNumero = (numero) => /^[0-9]+$/.test(numero);
 
// lenght é uma propriedade que verifica a quantidade de caracteres dentro do argumento cep
const cepValido = (cep) => cep.lenght == 8 && eNumero(cep);
 
// Função para preencher  formulário como campos API
const preencherFormulario = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('Bairro').value = endereco.Bairro;
    document.getElementById('UF').value = endereco.UF;
   
}
 
//Função de consumo de API ViaCEP
