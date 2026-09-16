/* 
- Objetivo:
    Quando clicar no botão, mostrar o formulario e a mascara.
- Logica da Programação:
    Qual botãoo clicar?
    Qual formulario?
    Qual máscara?
    O que é mostrar?
        - Trazer o formulario da esquerda para a direita
        - Centralizar o formulario na tela
        - Exibir a mascara
*/

/*
1 Passo: criar uma variavel para o formulario > const formulario = document(que serve para linkar com o html e com a DOM) + .(ponto) +
        queryselector + ("")parenteses e aspas para linkar com a class nomeada do formulario
2 Passo: criar class no formulario, no html
*/

const formulario = document.querySelector(".formulario");
const efeitoform = document.querySelector(".efeito-formulario");
const linkform = document.querySelector("link-form");


function mostrarform() {
    formulario.style.left = "50%";
    formulario.style.transform = "translate(-50%)";
    efeitoform.style.visibility = "visible";
}

function esconderform() {
    formulario.style.left = "-335px";
    formulario.style.transform = "translate(0)";
    efeitoform.style.visibility = "hidden";
}