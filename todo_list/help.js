//get the DOM of the input field
const task = document.querySelector('#task');
//get the DOM of the button
const button = document.querySelector('#button');
//get the DOM of the list
const list = document.querySelector('#list');
//create a function to add a task to the list
const addTask = () => {
    //create a new list item
    const listItem = document.createElement('li');
    //create a new checkbox
    const task1 = document.createElement('input');
    //create a new label
    const label = document.createElement('label');
    //create a new delete button
    const deleteButton = document.createElement('button');
    //add the checkbox to the list item
    listItem.appendChild(task1);
    //add the label to the list item
    listItem.appendChild(label);
    //add the delete button to the list item
    listItem.appendChild(deleteButton);
    //add the list item to the list
    list.appendChild(listItem);
    //add the text from the input field to the label
    label.innerText = task.value;
    //add the text from the input field to the checkbox
    task1.value = task.value;
    //add the text from the input field to the delete button
    deleteButton.innerText = 'Delete';
    //add the type checkbox to the checkbox
    task1.type = 'checkbox';
    //add the class task to the checkbox
    task1.className = 'task';
    //add the class label to the label
    label.className = 'label';
    //add the class delete to the delete button
    deleteButton.className = 'delete';
    //add an event listener to the delete button
    deleteButton.addEventListener('click', deleteTask);
    //add an event listener to the checkbox
    task1.addEventListener('change', checkTask);
    //create a function to check if the task is completed and change the text to strikethrough
    function checkTask() {
        if (task1.checked) {
            label.style.textDecoration = 'line-through';
        } else {
            label.style.textDecoration = 'none';
        }
    }
    //create a function to delete the task
    function deleteTask() {
        list.removeChild(listItem);
    }
};
//add an event listener to the button
button.addEventListener('click', addTask);


/*task1.addEventListener('change', checkTask);*/
//create a function to check if the task is completed and change the text to strikethrough
