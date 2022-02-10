function changeText() {
    document.getElementsByTagName("p")[0].innerText = "Um programador de sucesso e com o padrão de qualidade que eu exijo pra mim.";
}
changeText();

function changeColorToGrenn() {
       document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";
}
changeColorToGrenn();

function changeColorToWhite() {
       document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";
}
changeColorToWhite()

function changeTagText() {
       document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScript"
}
changeTagText()

function upperCase() {
       let paragraph = document.getElementsByTagName("p")[0];
       paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
       // document.getElementsByTagName("p")[0].innerHTML = document.getElementsByTagName("p")[0].innerHTML.toUpperCase();
}
upperCase();

function showConsole() {
       let content = document.getElementsByTagName("p");
       for (let index = 0; index < content.length; index += 1){
              console.log(content[index].innerHTML);
       }
}
showConsole();




  /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */