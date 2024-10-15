document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('#create-task-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let todo = document.getElementById('new-task-description').value;
        let user = document.getElementById('user').value;
        let dueDate = document.getElementById('due-date').value;

        if (todo && user && dueDate) { // Check for empty fields
            buildToDo(todo, user, dueDate);
            form.reset();
        } else {
            alert("Please fill out all fields."); 
        }
    });

    function buildToDo(todo, user, dueDate) {
        let li = document.createElement('li');
        let btnDelete = document.createElement('button');
        btnDelete.textContent = 'x';
        btnDelete.addEventListener('click', handleDelete);
        
        li.textContent = `${todo}, Assigned to: ${user}, Due: ${dueDate} `;
        li.appendChild(btnDelete); // Corrected 'btn' to 'btnDelete'
        document.querySelector(`#tasks`).appendChild(li);
    }
    function handleDelete(e) {
        e.target.parentNode.remove(); // Removes the parent <li>
    }
});
