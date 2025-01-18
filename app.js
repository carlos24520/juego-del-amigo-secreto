// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let ingresarLista = [];
let resultado = document.getElementById("resultado");
let listaDesplegable = document.getElementById("listaAmigos");

function textoInicial(){
    let amigo = document.getElementById("amigo");
    amigo.value = "";
    
}
function resetListaDesplegable(){ 
    listaDesplegable.innerHTML = "";
    ingresarLista = [];
    
}


function resetSorteo(){ 
    if(resultado.innerHTML != ""){
        resultado.innerHTML = "";
    }
    
}

function sortearAmigo(){ 
    if(ingresarLista[0] != null){
        let seleccionado = ingresarLista[Math.floor(Math.random()*ingresarLista.length)]; 
        let li = document.createElement("li");
        li.innerHTML = seleccionado;
        resultado.appendChild(li);
        textoInicial();
        resetListaDesplegable();
    
    } else{
        alert('Escriba un nombre correcto para realizar el sorteo'); 
    }    
}

function mostrarLista(aingresarLista){ 
    listaDesplegable.innerHTML = "";
    for (let i = 0; i<ingresarLista.length; i++){
        let elemento = ingresarLista[i]
        let li = document.createElement("li");
        li.innerHTML = elemento;
        listaDesplegable.appendChild(li);
        
    }
    
}

function agregarAmigo(){  
    resetSorteo();
    let amigo = document.getElementById("amigo").value;
        if (amigo == ''){
            alert('Escriba un nombre para la lista');
        } else{
            ingresarLista.push(amigo);
            textoInicial();
            console.log(ingresarLista);
            mostrarLista(ingresarLista);
        }
    
}