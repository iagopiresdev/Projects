document.querySelector('ul#list').addEventListener('change', check);
function check(){
    let label = document.querySelectorAll('label');
    let check = document.querySelectorAll('input');

    for (let i = 0; i < label.length; i++) {
        if (check[i].checked) {
            label[i].style.textDecoration = 'line-through';
        }
        else {
            label[i].style.textDecoration = 'none';
        }
    }
}

document.getElementById('add').addEventListener('click', add);

function add(){
    //let task = document.getElementById('task').value;
    let task = document.querySelector('#newTask').textContent;
    
    
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    let deleteButton = document.createElement('button');

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    list.appendChild(li);

    label.innerText = task;
    checkbox.value = task;
    deleteButton.innerText = 'Delete';

    checkbox.type = 'checkbox';
    checkbox.className = 'task';
    label.className = 'label';
    deleteButton.className = 'delete';
}


/*    deleteButton.addEventListener('click', deleteTask);
    checkbox.addEventListener('change', checkTask);

    function deleteTask() {
        list.removeChild(li);
    }

    function checkTask() {
        if (checkbox.checked) {
            label.style.textDecoration = 'line-through';
        } else {
            label.style.textDecoration = 'none';
        }
    }

    */