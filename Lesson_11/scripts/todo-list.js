const todoList1 = [];

function addTodo1() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todoList1.push(name);
    console.log(todoList1);
    inputElement.value = '';
}

const todoList2 = [];
function addTodo2() {
    const inputElement = document.querySelector('.js-name-input-2');
    const name = inputElement.value;
    const dueDate = document.querySelector('.js-due-date-input').value;
    if (name !== '')
        todoList2.push({name, dueDate});
    document.querySelector('.js-show-todo-list').innerHTML = '';

    for (const todoList2Key in todoList2) {
        const html = `
        <div>${todoList2[todoList2Key].name}</div>
        <div>${todoList2[todoList2Key].dueDate}</div>
        <button class="delete-todo-button" onclick="todoList2.splice(${todoList2Key}, 1); addTodo2();">Delete</button>`;
        document.querySelector('.js-show-todo-list').innerHTML += html;
    }
    inputElement.value = '';
}
