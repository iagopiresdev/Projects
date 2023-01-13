let todo = document.getElementById('task');
let button = document.getElementById('add');

function addTask(){
    let task = todo.value;
    let list = document.getElementById('tasks');
    let li = document.createElement('li');
    li.textContent = task;
    list.append(li);
    todo.value = "";
}

if(button){
    button.addEventListener('click', addTask);
}