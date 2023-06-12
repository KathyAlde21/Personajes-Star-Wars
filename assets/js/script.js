console.log('probando');
//'https://swapi.dev/api/people/'
//alert(`Bienvenido: Para revisar los personajes debe deslizar el mouse sobre la sección de su interes.`);

let urlST = 'https://swapi.dev/api/people/';

function Personaje(nombre, estatura, peso) {
    this.nombre = nombre;
    this.estatura = estatura;
    this.peso = peso;
}

const getData = async (id) => {
    let response = await fetch(urlST + id);
    let data = await response.json();
    let { name: nombre, height: estatura, mass: peso } = data;
    let nuevoPersonaje = new Personaje(nombre, estatura, peso);
    console.log(nuevoPersonaje);
    return nuevoPersonaje;
}

/* ------------------------------------------------ */

//función generadora, cada vez que genero pasa a la siguiente estacion
function* counter (idInicio, idTermino) {
    for (let i = idInicio; i <= idTermino; i++) {
        yield getData(i);
    }
}
let generadora = counter();

/*
function* counterUno (idInicio, idTermino) {
    for (let i = idInicio; i <= idTermino; i++) {
        yield getData(i);
    }
}
let generadoraUno = counterUno(1, 5);

function* counterDos (idInicio, idTermino) {
    for (let i = idInicio; i <= idTermino; i++) {
        yield getData(i);
    }
}
let generadoraDos = counterDos(6, 11);


function* counterTres (idInicio, idTermino) {
    for (let i = idInicio; i <= idTermino; i++) {
        yield getData(i);
    }
}
let generadoraTres = counterTres(12, 17);

//validando en consola
console.log(generadoraUno.next()); //1
console.log(generadoraUno.next()); //2
console.log(generadoraUno.next()); //3
console.log(generadoraUno.next()); //4
console.log(generadoraUno.next()); //5
console.log(generadoraUno.next()); //true
console.log(generadoraDos.next()); //6
console.log(generadoraTres.next()); //12
*/

/* ------------------------------------------------ */

//cargando datos y creando card
let contUno = document.getElementById('personajeUno');
let contDos = document.getElementById('personajeDos');
let contTres = document.getElementById('personajeTres');


const eventoClickUno = (personaje) => {
    contUno.innerHTML += 
        `<div class="card mb-3 mt-3">
            <div class="row g-0">
                <div class="col-md-2">
                    <img id="circulo" src="assets/img/rojo.png" class="rounded m-3">
                </div>
                <div class="col-md-10">
                    <div id="card1" class="card-body">
                        <h2 id="nombreUno" class="card-title">${personaje.nombre}</h2>
                        <p id="estaturaPesoUno" class="card-text">Estatura: ${personaje.estatura} cm. Peso: ${personaje.peso} kg</p>
                    </div>
                </div>
            </div>
        </div>`;  
    console.log(eventoClickUno);      
};
  
const eventoClickDos = (personaje) => {
    contDos.innerHTML += 
        `<div class="card mb-3 mt-3">
            <div class="row g-0">
                <div class="col-md-2">
                    <img id="circulo" src="assets/img/verde.png" class="rounded m-3">
                </div>
                <div class="col-md-10">
                    <div id="card1" class="card-body">
                        <h2 id="nombreDos" class="card-title">${personaje.nombre}</h2>
                        <p id="estaturaPesoDos" class="card-text">Estatura: ${personaje.estatura} cm. Peso: ${personaje.peso} kg</p>
                    </div>
                </div>
            </div>
        </div>`;  
console.log(eventoClickDos);      
};

const eventoClickTres = (personaje) => {
    contTres.innerHTML += 
        `<div class="card mb-3 mt-3">
            <div  class="row g-0">
                <div class="col-md-2">
                    <img id="circulo" src="assets/img/celeste.png" class="rounded m-3">
                </div>
                <div class="col-md-10">
                    <div id="card1" class="card-body">
                        <h2 id="nombreTres" class="card-title">${personaje.nombre}</h2>
                        <p id="estaturaPesoTres" class="card-text">Estatura: ${personaje.estatura} cm. Peso: ${personaje.peso} kg</p>
                    </div>
                </div>
            </div>
        </div>`;  
    console.log(eventoClickTres);      
};

/* ------------------------------------------------ */

//llamando al personaje desde línea de tiempo
evento1.addEventListener('click', async () => {
    let resultado = generadora.next();
    if (resultado.done) {
        generadora = counter(1, 5);
        contUno.innerHTML = '';
    } else {
        let personaje = await resultado.value;
        eventoClickUno(personaje);
    }
});

evento2.addEventListener('click', async () => {
    let resultado = generadora.next();
    if (resultado.done) {
        generadora = counter(6, 11);
        contDos.innerHTML = '';
    } else {
        let personaje = await resultado.value;
        eventoClickDos(personaje);
    }
});

evento3.addEventListener('click', async () => {
    let resultado = generadora.next();
    if (resultado.done) {
        generadora = counter(12, 17);
        contTres.innerHTML = '';
    } else {
        let personaje = await resultado.value;
        eventoClickTres(personaje);
    }
});


/*
evento1.addEventListener('click', async () => {
    let resultado = generadoraUno.next();
    if (resultado.done) {
        generadoraUno = counterUno(1, 5);
        contUno.innerHTML = '';
    } else {
        let personaje = await resultado.value;
        eventoClickUno(personaje);
    }
});

evento2.addEventListener('click', async () => {
    let resultado = generadoraDos.next();
    if (resultado.done) {
        generadoraDos = counterDos(6, 11);
        contDos.innerHTML = '';
    } else {
        let personaje = await resultado.value;
        eventoClickDos(personaje);
    }
});

evento3.addEventListener('click', async () => {
    let resultado = generadoraTres.next();
    if (resultado.done) {
        generadoraTres = counterTres(12, 17);
        contTres.innerHTML = '';
    } else {
        let personaje = await resultado.value;
        eventoClickTres(personaje);
    }
});
*/