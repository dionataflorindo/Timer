function criaHoraDosSegundos(segundos){
    const data = new Date(segundos *1000);
    return data.toLocaleTimeString('pt-br',{
        hour12:false,
        timeZone: 'UTC'
    });
}

console.log(criaHoraDosSegundos(10))

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;


document.addEventListener('click', function(e){
   console.log(e.target)
})

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    },1000);

}

iniciar.addEventListener('click', function(event){
    clearInterval(timer)
    relogio.classList.remove('pausado')
    iniciaRelogio()
    
});

pausar.addEventListener('click', function(event){
    clearInterval(timer)
    relogio.classList.add('pausado')
});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.remove('pausado')
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});