let listaDeNomes = ["Joana", "Maria", "Lucas"];

listaDeNomes.push("Juvêncio")

for (let indice = 0; indice < listaDeNomes.length; indice++){
    let mensagem = "Boas vindas, " + listaDeNomes[indice] + "!"
    console.log(mensagem)
}