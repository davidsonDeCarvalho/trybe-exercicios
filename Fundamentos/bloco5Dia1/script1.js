let paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";

document.getElementById("page-title").innerText = "Into the Wild";
document.getElementById("second-paragraph").innerText = "Este agora é um parágrafo modificado."

let secondParagraph = document.getElementById("second-paragraph");
    secondParagraph.style.fontSize = "50px";
    secondParagraph.style.backgroundColor = "blue";

let subtitle = document.getElementById("subtitle");
    subtitle.style.fontSize = "35px";
    subtitle.style.color = "green";
    subtitle.style.backgroundColor = "yellow";

let paragraphClass = document.getElementsByClassName("paragraphClass");
    paragraphClass[0].style.color = "yellow";
    paragraphClass[0].style.backgroundColor = "gray";

let subtitleColor = document.getElementsByTagName("h4")[0];
    subtitleColor.style.color = "red";


// Agora você! Faça o seguinte:

// Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
// Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
// Por fim, recupere o subtítulo e altere-o também.

/* Utilizando o mesmo template de exercício anterior:
Adicione uma classe igual para os dois parágrafos.
Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
Altere algum estilo do primeiro deles.
Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName. */
