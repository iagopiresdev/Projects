let task1 = document.getElementById('task1');
let task1Text = document.getElementById('task1Text');
let task2 = document.getElementById('task2');
let task3 = document.getElementById('task3');


/*task1.addEventListener('change', checkTask);*/
function checkTask() {
    if (task1.checked){
        let newTask = document.createElement('s'); 
        newTask.textContent = task1Text.textContent;
        task1Text.replaceWith(newTask);
        window.alert('Task 1 is completed');
    }else{
        let newTask = null;
        newTask = document.createElement('p');
        newTask.textContent = task1Text.textContent;
        task1Text.replaceWith(newTask);
        window.alert('Task 1 is not completed');
    }
}