// variable generales
var boxList = document.getElementsByClassName('box-list')[0];
var container = document.querySelector('.container');
/* Versión 0.0.1 */
boxList.addEventListener('click', addForm);

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
  button.addEventListener('click', function(event) {
    event.preventDefault();
    tarea();
    function tarea() {
      var container2 = document.createElement('div');
      var captureText = input.value;
      container2.textContent = captureText;
      container.appendChild(container2);

      var addList = document.createElement('p');
      addList.textContent = 'Añadir una tarea';
      container.appendChild(addList);
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
