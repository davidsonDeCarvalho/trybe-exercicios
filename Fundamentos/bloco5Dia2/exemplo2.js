// 1 Acesse o elemento elementoOndeVoceEsta .
let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
// console.log(elementoOndeVoceEsta);


// 2 Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = elementoOndeVoceEsta.parentElement;
pai.style.color = "blue"


// 3 Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = "Adicionado um texto ao elemento."


// 4 Acesse o primeiroFilho a partir de pai .
let primeiroFilho = pai.firstElementChild;


// 5 Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;


// 6 Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
let atentionText = elementoOndeVoceEsta.nextSibling;
// console.log(atentionText);


// 7 Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
// console.log(terceiroFilho);


// 8 Agora acesse o terceiroFilho a partir de pai .
let terceiroFilho2 = pai.lastElementChild.previousElementSibling;
// console.log(terceiroFilho2);




// E a prática? Aqui!

// 1 Crie um irmão para elementoOndeVoceEsta .
let elementPai = document.getElementById("pai");
let newSibling = document.createElement("section");
newSibling.id = "newSibling";
pai.appendChild(newSibling);


// 2 Crie um filho para elementoOndeVoceEsta .
let elementSecondDad = document.getElementById("elementoOndeVoceEsta");
let newSon = document.createElement("section");
newSon.id = "newSon";
elementoOndeVoceEsta.appendChild(newSon);


// 3 Crie um filho para primeiroFilhoDoFilho .
let elementThirdDad = document.getElementById("primeiroFilhoDoFilho");
let newChild = document.createElement("section");
newChild.id = "newChild";
primeiroFilhoDoFilho.appendChild(newChild);


// 4 A partir desse filho criado, acesse terceiroFilho .
let child = newChild;
child.parentElement.parentElement.nextElementSibling;
// console.log(child.parentElement.parentElement.nextElementSibling);



// Para praticar:

// 1 Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

let elementRemove = document.getElementById("pai");

for (let index = elementRemove.childNodes.length - 1; index >= 0; index -= 1) {
    let elementRemoved = elementRemove.childNodes[index];
    if (elementRemoved.id !== "elementoOndeVoceEsta") {
        elementRemoved.remove();
    }
}

let removeOthers = document.getElementById("segundoEUltimoFilhoDoFilho");
removeOthers.remove();
let removeNewSon = document.getElementById("newSon");
removeNewSon.remove();