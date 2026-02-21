Juego en JavaScript

Este proyecto consiste en un juego interactivo desarrollado con JavaScript, HTML y CSS. La dinámica se basa en tres cuadros que cambian de color de manera automática y aleatoria, donde el usuario puede detener cada uno en el momento que desee.
Cada cuadro funciona con su propio intervalo independiente, lo que permite que los cambios de color no sigan una secuencia uniforme. 
Funcionamiento
Al iniciar la aplicación, los cuadros comienzan a cambiar de color automáticamente. El usuario puede detener cada cuadro de forma individual utilizando los botones correspondientes.

El resultado se determina de la siguiente manera:

    1. Si los tres cuadros terminan con el mismo color, el usuario gana.
    2. Si al detener dos cuadros los colores son diferentes, el juego se pierde automáticamente.
    3. En cualquier otro caso, se invita a intentar nuevamente.

Lógica implementada

    1. Uso de setInterval para manejar cambios de color en cada cuadro.
    2. Manejo de estado mediante arreglos para controlar:
    3. Cuadros detenidos

Estructura del proyecto

    1. index.html: Estructura del juego.
    2. styles.css: Estilos visuales de la interfaz.
    3. script.js: Lógica del juego y manejo de eventos.

Objetivo

Aplicar conceptos fundamentales de JavaScript como manipulación del DOM, uso de temporizadores, manejo de eventos y control de estado en una aplicación interactiva.
