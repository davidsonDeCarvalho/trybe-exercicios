// Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

// 1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let h1Element = document.createElement("h1");
h1Element.innerText = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(h1Element);


// 2 Adicione a tag main com a classe main-content como filho da tag body ;
let mainElement = document.createElement("main");
mainElement.className = "main-content";
document.body.appendChild(mainElement);


// 3 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let sectionElement = document.createElement("section");
sectionElement.className = "center-content";
mainElement.appendChild(sectionElement);


// 4 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let pElement = document.createElement("p");
pElement.innerText = "Texto para testagem de apredizado.";
sectionElement.appendChild(pElement);


// 5 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let sectionElement2 = document.createElement("section");
sectionElement2.className = "left-content";
mainElement.appendChild(sectionElement2);


// 6 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let sectionElement3 = document.createElement("section");
sectionElement3.className = "right-content";
mainElement.appendChild(sectionElement3);


// 7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let imageElement = document.createElement("img");
imageElement.src = "https://picsum.photos/200";
imageElement.className = "small-image";
sectionElement2.appendChild(imageElement);


// 8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let listElement = document.createElement("ul");
sectionElement3.appendChild(listElement);


function insertListItems(numbers) {
    for (let index = 0; index < numbers.length; index += 1) {
        let numbersList = numbers[index];
        
        let listContent = document.createElement("li");
        listContent.innerText = numbersList;
        listElement.appendChild(listContent);
    }
    }
insertListItems(["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"]);


// 9 Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
// 2 Adicione a classe description nas 3 tags h3 criadas;
function createH3(number) {
    for (let index = 0; index < number; index += 1) {
        let h3Element = document.createElement("h3");
        h3Element.className = "description";
        mainElement.appendChild(h3Element);
    }
}
createH3(3);


// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

// 1 Adicione a classe title na tag h1 criada;
h1Element.className = "title";


// 3 Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
let removeLeftContent = document.querySelectorAll("section")[1];
mainElement.removeChild(removeLeftContent);


// 4 Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

let centralizeSection = document.querySelectorAll("section")[1];
centralizeSection.style.marginRight = "auto";


// 5 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
let changeBgColor = document.querySelectorAll("main")[0];
changeBgColor.style.backgroundColor = "green";


// 6 Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
let removeListElement = document.querySelectorAll("ul")[0].childNodes;

for (let index = 0; index < removeListElement.length + 1; index += 1) {
    let functionParameter = removeListElement[index];
    if (index == 8) {
        document.querySelectorAll("ul")[0].removeChild(removeListElement[index]);
    } else if(index == 9){
        document.querySelectorAll("ul")[0].removeChild(removeListElement[index - 1]);
    }    
}