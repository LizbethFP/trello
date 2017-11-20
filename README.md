# Replica de Trello

* **Track:** _Common Core_
* **Curso:** _Creando un sitio web interactivo con JavaScript_
* **Unidad:** _Creando interacción con JavaScript_

## Objetivo
---
El reto consiste en replicar el sitio de **Trello**, según una secuencia de versiones que van asemejando cada vez más a la página original. Este será el resultado
a lograr:


![Sin titulo](docs/trello.jpg)



## Versiones Solicitadas
---
### Versión 0.0.1

* Se mostrará el texto "Añadir una lista ...".
* Al hacer click se debe ocultar el texto y mostrar un formulario.
* El formulario está conformado por un input y un botón para que pueda añadir tareas a tu lista.

### Versión 0.0.2

* Al dar click en el botón de "Guardar", se mostrará un nuevo cuadro donde estará el nombre de la lista agregada.
* Mostrar un texto de "Añadir una tarea" dentro de la lista.
### Versión 0.0.3

* Al dar click en "Añadir una tarea", deberá mostrar un formulario con un textarea y un botón que diga "Añadir".
### Versión 0.0.4

* Poner focus al textarea al dar click en "Agregar nueva tarea".
* Al dar click en el botón de "Añadir", deberá aparecer el texto de la tarea debajo del título de la lista.
### Versión 0.0.5

* Mostrar el formulario nuevamente debajo de la última tarea añadida.
### Versión 0.0.6 (Extra)

* Poder agregar múltiples listas con tarjetas. Para esto, el formulario de "Añadir una lista" debe aparecer a la derecha de la lista anteriormente creada.

## Contenido

Este proyecto contiene:

1. Un archivo `index.html` que contiene la estructura inicial de la página web. Este debe contener las siguientes secciones:

  * Un encabezado de color morado oscuro y  que contiene dos cajas de izquierda a derecha de color contrastante. La primera contiene el ícono de Trello y la palabra "tablero" y la segunda es una barra de búsqueda con un ícono de búsqueda en la parte derecha. Luego, se encuentra situado en el centro el ícono y nombre de Trello. En la parte derecha, se encuentra cuatro opciones que llevan a enlaces diferentes. Todos los elementos en el encabezado tienen la característica de cambiar de color de fondo al pasar el mouse por encima, además de demostrar un cursor diferente.

  * Una sección de fondo morado más claro que contiene un tres cajas en la parte izquierda. En la primera, se encuentra, a modo de subtítulo, "Proyecto 1-1". En la segunda, se encuentra el ícono de una estrella. En la tercera, se encuentra el ícono de un candado y la palabra "privado". Asimismo, se ubica una caja en la parte derecha que contiene dos enlaces que redireccionan a otras áreas y que se representan con un ícoco de puntos suspensivos y un enlace a "Mostrar menú".

  * Una sección contenedora de una caja que indica "Añadir una lista", la que hará que se creen listas que se irán reubicando a la izquierda, cada vez que se presione el botón "Guardar".

2. Una carpeta `assets` donde se encuentra la carpeta `images` con la imagen del logo de Trello en formato ***png***, y la carpeta `icons` con la carpeta `icomoon`, que a su vez contiene a la carpeta `fonts` con los íconos y una hoja de estilos llamada `style`.

3. Una carpeta `css` que contiene un archivo `main.css` donde hay clases reutilizables y específicas para darle estilo a la página web.

4. Una carpeta `docs` que contiene la imagen en formato ***jpg*** de la página web a replicar.

5. Una carpeta `js` que contiene un archivo `app.js` donde se encuentra el código que le brinda funcionalidad a la página.

6. Un archivo  **`README.md`** que explica el contenido del repositorio.

## Autora
Lizbeth Félix Peña

## Fecha
19/11/2017
