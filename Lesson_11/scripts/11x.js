const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
renderTodoList();


// function addTodo() {
//     const inputElement = document.querySelector('.js-name-input-2');
//     const name = inputElement.value;
//     const dueDate = document.querySelector('.js-due-date-input').value;
//     if (name !== '') {
//         todoList.push({name, dueDate});
//         localStorage.setItem('todoList', JSON.stringify(todoList));
//     }
//     document.querySelector('.js-show-todo-list').innerHTML = '';
//
//     for (const todoList2Key in todoList) {
//         const html = `
//         <div>${todoList[todoList2Key].name}</div>
//         <div>${todoList[todoList2Key].dueDate}</div>
//         <button class="delete-todo-button" onclick="todoList.splice(${todoList2Key}, 1); addTodo(); localStorage.setItem('todoList', JSON.stringify(todoList));">Delete</button>`;
//         document.querySelector('.js-show-todo-list').innerHTML += html;
//     }
//     inputElement.value = '';
// }

// Array to store todo items

/**
 * Adds a new todo item.
 */
function addTodo() {
    // Get input values
    const inputElement = document.querySelector('.js-name-input-2');
    const name = inputElement.value.trim();
    const dueDate = document.querySelector('.js-due-date-input').value;

    // Check if name input is not empty
    if (name !== '') {
        todoList.push({ name, dueDate });
        saveTodosToLocal();
    }

    // Render the todo list
    renderTodoList();

    // Clear the input field
    inputElement.value = '';
}

/**
 * Renders the todo list on the page.
 */
function renderTodoList() {
    const listContainer = document.querySelector('.js-show-todo-list');
    listContainer.innerHTML = '';

    todoList.forEach((todo, index) => {
        const html = `
            <div>${todo.name}</div>
            <div>${todo.dueDate}</div>
            <button class="delete-todo-button" onclick="deleteTodo(${index})">Delete</button>
        `;
        listContainer.innerHTML += html;
    });
}

/**

 * Deletes a todo item by its index and refreshes the list.
 */
function deleteTodo(index) {
    todoList.splice(index, 1);
    saveTodosToLocal();
    renderTodoList();
}
/**
 * Saves the current state of the todo list to local storage.
 */
function saveTodosToLocal() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function clearTodoList() {
    localStorage.removeItem('todoList');
    const listContainer = document.querySelector('.js-show-todo-list');
    listContainer.innerHTML = '';
}
