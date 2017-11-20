// variable generales
var boxList = document.getElementsByClassName('box-list')[0];
var container = document.querySelector('.container');

/* Versión 0.0.1 */
// Al hacer click se debe ocultar el texto y mostrar un formulario.
boxList.addEventListener('click', addForm);
// El formulario está conformado por un input y un botón para que pueda añadir tareas a tu lista
function addForm(event) {
  var form = document.createElement('form');
  var input = document.createElement('input');
  var button = document.createElement('button');
  button.textContent = 'Guardar';
  event.preventDefault();
  form.appendChild(input);
  form.appendChild(button);

  container.appendChild(form);
  container.removeChild(boxList);

  /* Versión 0.0.2 */
  // Al dar click en el botón de "Guardar", se mostrará un nuevo cuadro donde estará el nombre de la lista agregada.
  button.addEventListener('click', function(event) {
    event.preventDefault();
    saveTask();
    function saveTask() {
      var container2 = document.createElement('div');
      var captureText = input.value;
      container2.textContent = captureText;
      container.appendChild(container2);
      // Mostrar un texto de "Añadir una tarea" dentro de la lista.
      var addList = document.createElement('p');
      addList.textContent = 'Añadir una tarea';
      container.appendChild(addList);

      /* Versión 0.0.3 */
      // Al dar click en "Añadir una tarea", deberá mostrar un formulario con un textarea y un botón que diga "Añadir".
      addList.addEventListener('click', function(event) {
        event.preventDefault();
        var container2 = document.createElement('div');
        var captureText = input.value;
        container2.textContent = captureText;
        container.appendChild(container2);
        var addList = document.createElement('p');
        addList.textContent = 'Añadir una tarea';
        container.appendChild(addList);
      });
    }
  });
}
