document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('#create-task-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let todo = document.getElementById('new-task-description').value;
        let priority = document.getElementById('priority').value;
        let user = document.getElementById('user').value;
        let dueDate = document.getElementById('due-date').value;
        buildToDo(todo, priority, user, dueDate);
        form.reset();
    });
});

function buildToDo(todo, priority, user, dueDate) {
    let li = document.createElement('li');
    let btnDelete = document.createElement('button');
    let btnEdit = document.createElement('button');

    btnDelete.textContent = 'x';
    btnDelete.addEventListener('click', handleDelete);
    
    btnEdit.textContent = 'Edit';
    btnEdit.addEventListener('click', () => handleEdit(todo, priority, user, dueDate, li));

    li.textContent = `${todo} (Priority: ${priority}, User: ${user}, Due: ${dueDate}) `;
    li.style.color = getPriorityColor(priority);
    li.appendChild(btnEdit);
    li.appendChild(btnDelete);
    document.querySelector(`#tasks`).appendChild(li);
}

function handleDelete(e) {
    e.target.parentNode.remove();
}

function handleEdit(todo, priority, user, dueDate, li) {
    document.getElementById('new-task-description').value = todo;
    document.getElementById('priority').value = priority;
    document.getElementById('user').value = user;
    document.getElementById('due-date').value = dueDate;
    li.remove(); // Remove the task from the list after editing
}

function getPriorityColor(priority) {
    switch (priority) {
        case 'high':
            return 'red';
        case 'medium':
            return 'yellow';
        case 'low':
            return 'green';
        default:
            return 'black';
    }
}
