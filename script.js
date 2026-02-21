//3. cada cuadro lleva su secuencia diferente
//4. los colores no pueden repetirse a nivel de cada cuadro, es decir dos veces verde error, debe ser verde y luego azul o rojo

// aqui espero a que todo el HTML cargue antes de ejecutar el juego
document.addEventListener("DOMContentLoaded", () => {

  // lista de colores disponibles en el juego
  const colores = ['rojo', 'azul', 'verde'];

  // selecciono los elementos del DOM
  const coloresDivs = document.querySelectorAll('.color');
  const botonesDetener = document.querySelectorAll('.btn-detener');
  const btnReiniciar = document.getElementById('btn-reiniciar');
  const resultado = document.getElementById('resultado');

  // estado de cada cuadro (true = detenido)
  let cuadrosDetenidos = [false, false, false];
  // aqui guardo el color actual de cada cuadro
  let coloresActuales = [null, null, null];
  // aqui creo un intervalo independiente para cada cuadro
  let intervalos = [null, null, null];

  // funcion que inicia el cambio de color para UN cuadro específico
  function iniciarCambioColor(indice) {
    // creo un intervalo independiente por cada cuadro
    intervalos[indice] = setInterval(() => {
      // si el cuadro está detenido, no hace nada
      if (cuadrosDetenidos[indice]) return;
      let color;
      // aqui evito que el mismo cuadro repita el mismo color seguido
      do {
        color = colores[Math.floor(Math.random() * colores.length)];
      } while (color === coloresActuales[indice]);

      // guardo el nuevo color del cuadro
      coloresActuales[indice] = color;

      // reinicio clases y aplico el nuevo color
      coloresDivs[indice].className = "color";
      coloresDivs[indice].classList.add(color);

    }, 700); // Velocidad (timepo) del cambio de color
  }

  // función para detener un cuadro especifico
  function detenerCambioColor(indice) {

    // marco el cuadro como detenido
    cuadrosDetenidos[indice] = true;

    // detengo solo el intervalo de ese cuadro
    clearInterval(intervalos[indice]);

    // obtengo los colores de los cuadros detenidos
    const detenidos = coloresActuales.filter((_, i) => cuadrosDetenidos[i]);

    // si hay 2 cuadros detenidos y son de colores diferentes, pierde
    if (detenidos.length === 2 && detenidos[0] !== detenidos[1]) {
      resultado.textContent = "¡Perdiste!";
      resultado.className = "perdiste";

      // Detengo todos los intervalos
      intervalos.forEach(id => clearInterval(id));
      return;
    }

    // si los 3 están detenidos se verifica el resultado
    if (cuadrosDetenidos.every(d => d)) {
      verificarResultado();
      intervalos.forEach(id => clearInterval(id));
    }
  }

  //función para verificar si se gano o no
  function verificarResultado() {
    const [a, b, c] = coloresActuales;

    if (a === b && b === c) {
      resultado.textContent = "¡Ganaste!";
      resultado.className = "ganaste";
    } else {
      resultado.textContent = "Intenta de nuevo";
    }
  }

  function reiniciarJuego() {

    //detengo todos los intervalos antes de reiniciar
    intervalos.forEach(id => clearInterval(id));

    // reinicio estados
    cuadrosDetenidos = [false, false, false];
    coloresActuales = [null, null, null];
    intervalos = [null, null, null];

    // limpio resultado
    resultado.textContent = "";
    resultado.className = "";

    // limpio colores visuales
    coloresDivs.forEach(div => div.className = "color");

    // vuelvo a iniciar los intervalos (uno por cuadro)
    for (let i = 0; i < 3; i++) {
      iniciarCambioColor(i);
    }
  }


  //eventos de botones detener
  botonesDetener.forEach(boton => {
    const i = parseInt(boton.dataset.indice);
    boton.addEventListener("click", () => detenerCambioColor(i));
  });

  // evento reiniciar
  btnReiniciar.addEventListener("click", reiniciarJuego);

  //inicio automático del juego (cada cuadro arranca su propio intervalo)
  for (let i = 0; i < 3; i++) {
    iniciarCambioColor(i);
  }

});