//console.log('probando');
//alert(`Bienvenido: Para revisar los personajes debe deslizar el mouse sobre la sección de su interes.`);
var clickUno = document.querySelector('#evento1')
var clickDos = document.querySelector('#evento2')
var clickTres = document.querySelector('#evento3')

class Persona{
    constructor(nombre, altura, peso){
        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
    }
}

/* -- */

function getPersonaje(done){
    const results = fetch ('https://swapi.dev/api/people/');
    results
        .then(response => response.json())
        .then(data => {
           console.log(data);
          // done(data)
        });   
}
getPersonaje();


/*
const url = 'https://swapi.dev/api/people';

const consultarAPI = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(resp => resp.json()).then(data => {
            console.log(data);
            resolve(data)
        })
    })
}*/

/*
const getPersonaje = (id) => {
    return new Promise(async(resolve, reject) => { //para asegurarme de manejo de errores => try catch
        try {
            let url = 'https://swapi.dev/api/people/';
            let response = await fetch(url);
            let data = await response.json();
           // console.log(data); //para probar y se ve en consola web
           //para ver los datos de class los piso acá primero
           let {name, heigth, mass} = data; //nombre, altura, peso
           let nuevoPersonaje = new Persona(name, heigth, mass);
           resolve(nuevoPersonaje);    
       } catch (error) {
           reject();
       }
   });
}
//getPersonaje(1); //para probar con console.log(data);*/

//función generadora, cada vez que genero pasa a la siguiente estacion
function* generator1() {
    yield getPersonaje(1);
    yield getPersonaje(2);
    yield getPersonaje(3);
    yield getPersonaje(4);
    yield getPersonaje(5);
}

function* generator2() {
    yield getPersonaje(6);
    yield getPersonaje(7);
    yield getPersonaje(8);
    yield getPersonaje(9);
    yield getPersonaje(10);
   // yield getPersonaje(11);
}
function* generator3() {
    yield getPersonaje(12);
    yield getPersonaje(13);
    yield getPersonaje(14);
    yield getPersonaje(15);
    yield getPersonaje(16);
  //  yield getPersonaje(17);
}

const genUno = generator1(); // "Generator { }"
const genDos = generator2(); // "Generator { }"
const genTres = generator3(); // "Generator { }"

console.log(genUno.next());


/*
function eventoClickUno(){
    var cardUno = document.querySelector('#card1');
    var nombreUno = document.querySelector('#nombreUno');
    var medidasUno = document.querySelector('#estaturaPesoUno');
    let personaje1 

        `
        <h2 id="nombreUno" class="card-title">${nombre.persona}</h2>
        <p id="estaturaPesoUno" class="card-text">${estatura.persona} ${peso.persona}</p>
        `;
    
    
     
    


}







$(document).ready(function(){
    $('#evento1').mouseenter(function() {
        genUno.next()
    })

    $('#evento2').mouseenter(function() {
        genDos.next()
    })

    $('#evento3').mouseenter(function() {
        genTres.next()
    })
})

*/


/*
clickUno.addEventListener('click', eventoClickUno);
clickDos.addEventListener('click', eventoClickDos);
clickDos.addEventListener('click', eventoClickTres);
*/
