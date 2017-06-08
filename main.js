// Add your JS here.
var newToDo = document.querySelector('.new-todo');
var toDoList = document.querySelector('.todo-list');


 newToDo.addEventListener("keypress", function(event) {
   if (event.keyCode === 13) {
     let newItem = event.target.value;
     event.target.value = "";
     var newToDoItem = document.createElement('li');
     newToDoItem.innerHTML = '<li><div class="view"><label>' + newItem + '</label></div></li>';
     toDoList.appendChild(newToDoItem);
   }
   return event;
 });
