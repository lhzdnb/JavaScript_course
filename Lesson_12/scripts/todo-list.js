const todoList = [];

document.querySelector('.js-add-todo-button').addEventListener('click', addTodo);

function addTodo() {
    const inputElement = document.querySelector('.js-name-input-2');
    const name = inputElement.value;
    const dueDate = document.querySelector('.js-due-date-input').value;
    if (name !== '')
        todoList.push({name, dueDate});
    document.querySelector('.js-show-todo-list').innerHTML = '';

    todoList.forEach((todoObject, index, array) => {
        const html = `
        <div>${todoObject.name}</div>
        <div>${todoObject.dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button>`;
        document.querySelector('.js-show-todo-list').innerHTML += html;
    });

    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            addTodo();
        });
    });

    inputElement.value = '';
}
