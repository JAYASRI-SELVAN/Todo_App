const inputBox = document.getElementById("input-box");
const addButton = document.getElementById("add");
const listContainer = document.getElementById("list-container");
addButton.addEventListener("click", addTask);
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.className = 'task-box';
        li.innerHTML = inputBox.value; 
        let deleteButton = createDeleteButton(li); 
        li.appendChild(deleteButton);
        listContainer.appendChild(li);
        inputBox.value = ''; 
    }
}
function createDeleteButton(li) {
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() {
        listContainer.removeChild(deleteButton.parentElement);
    };
    return deleteButton;
}
