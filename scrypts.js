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
    formulario.style.left = "-340px";
    formulario.style.transform = "translate(0)";
    efeitoform.style.visibility = "hidden";
}







/*
function cliqueNoBotao() {
    alert("Rayanne eu te amo carai");
}
*/

/*
    - Alert:
        - serve para criar uma caixa de dialogo em scrpit no navegador, geralmente para usado para gerar um alerta ao usuario,
          no navegador, quando algum comando acionado está sendo usado de maneira errada
*/















/*
Variavel: Uma caixa que serve para guardar informações. Geralmente são comandos para execução de ações, 
que são memorizadas dentro da variável, como se fosse um apelido, que quando acionado, informa ao navegador, 
que execute determinada ação.

- Tags p criar variaveis:
    var: n é mais utilizado (antigo)
    let: permite mudar o valor da variavel
    const: Valor fixo p variavel

    console.log(); serve para mostrar as informações que estão salvas na variável que existir e que for colocada dentro do parenteses

*/
/* AULA VARIÁVEL
const treino1 = "TREINAMENTO";

console.log(treino1);

let treino2 = "treinamento2";

console.log(treino2);

treino2 = "dedicação";

console.log(treino2);
*/

/*
    Funções: Trecho de um código que só é executado, quando chamado.
    Tag: Function + nome da função = Parenteses () + chaves { tag const + nome da variavel + sinal de igual + comando,operação, 
    ação q se quer realizar}
*/

/*
DOM: Document object model: Arvore de elementos (hierarquia dos elementos)
    - O JavaScript altera a estrutura dos elementos da pagina web (A DOM)



const lara = "Lara eu te amo";
const ray = "Rayanne eu te amo";
const lara_idade = 14;
const ray_idade = 34;

console.log(lara);
console.log(ray);

function somaidade() {
    const somaidade = lara_idade + ray_idade
    console.log(somaidade)
}

somaidade()
*/