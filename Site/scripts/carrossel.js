const carrossel = document.getElementById("carrossel")
const paginas = document.querySelectorAll('.game_card')

let idPagina=0;

function RodaCarrossel(){
    idPagina++
    console.log("Carrosel")
    if (idPagina >= paginas.length){
        idPagina = 0
    }
    carrossel.style.transform = `translateX(${(-idPagina * carrossel.clientWidth)}px)`
}

setInterval(RodaCarrossel,5000)