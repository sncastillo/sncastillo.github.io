//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let uno = document.getElementById("uno");
crearBarra(uno);
let dos = document.getElementById("dos");
crearBarra(dos);
let tres = document.getElementById("tres");
crearBarra(tres);
let cuatro = document.getElementById("cuatro");
crearBarra(cuatro);
let cinco = document.getElementById("cinco");
crearBarra(cinco);
let seis = document.getElementById("seis");
crearBarra(seis);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervaluno = setInterval(function(){
            pintarBarra(uno, 16, 0, intervaluno);
        },100);
        const intervaldos = setInterval(function(){
            pintarBarra(dos, 15, 1, intervaldos);
        },100);
        const intervaltres = setInterval(function(){
            pintarBarra(tres, 14, 2, intervaltres);
        },100);
        const intervalcuatro = setInterval(function(){
            pintarBarra(cuatro, 15, 3, intervalcuatro);
        },100);
        const intervalcinco = setInterval(function(){
            pintarBarra(cinco, 16, 4, intervalcinco);
        },100);
        const intervalseis = setInterval(function(){
            pintarBarra(seis, 16, 5, intervalseis);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}