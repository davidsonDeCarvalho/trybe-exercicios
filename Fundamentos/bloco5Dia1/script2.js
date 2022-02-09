function estiloFundo(elemento, cor) {
    document.querySelector(elemento).style.backgroundColor = cor;
}

estiloFundo("body", "black");
estiloFundo("header", "green");
estiloFundo(".emergency-tasks", "purple");
estiloFundo(".no-emergency-tasks", "blue");
estiloFundo("footer", "green");

document.querySelectorAll("h3")[0].style.backgroundColor = "brown";
document.querySelectorAll("h3")[1].style.backgroundColor = "brown";
document.querySelectorAll("h3")[2].style.backgroundColor = "black";
document.querySelectorAll("h3")[3].style.backgroundColor = "black";