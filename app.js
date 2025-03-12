// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [] 


function agregarAmigo(){
    if (document.getElementById('amigo').value != ''){
          amigos.push(document.getElementById('amigo').value)
        document.getElementById('amigo').value = ''
        console.log(amigos)
        mostrarAmigos()

    }else{
        alert('Por favor, inserte un nombre.')

    }

}   

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = '';

    for (let i in amigos){

        lista.innerHTML += `<li>${amigos[i]}</li>`

    }
}

function sortearAmigo(){

    if (amigos.length == 0){
        alert("No ha ingresado nombres aun")
    }else{

        let indiceAleatorio = Math.floor(Math.random() * amigos.length)
        ganador = document.getElementById('listaAmigos');
        ganador.innerHTML = `<li>${amigos[indiceAleatorio]}</li>`
    }   

} 

