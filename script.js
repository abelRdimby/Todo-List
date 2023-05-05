function loadDataFromLocalStorage() {
    if (localStorage.getItem('todoList') === null) {
        localStorage.setItem('todoList', JSON.stringify([
            {
                name: 'Todo 01'
            },
            {
                name: 'Todo 02'
            },
            {
                name: 'Todo 03'
            },
            {
                name: 'Todo 04'
            },
            {
                name: 'Todo 05'
            },
        ]));
    }

    return JSON.parse(localStorage.getItem('todoList'));
}

function persistDataToLocalStorage(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
}

function createTodoItemElement(todoItem , index) {
    return `
        <div class="item" id="item-${index}">
            <div class="boxIcon">
                <input class="checkBox" type="checkbox">
            </div>
            <div class="todoInfo">
                <p id="myRendu">${todoItem.name}</p>
            </div>
            <div class="boxIcon">
                <a href="/" class="itemDelete" data-id="${index}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 7l16 0"></path>
                        <path d="M10 11l0 6"></path>
                        <path d="M14 11l0 6"></path>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                        </svg>
                </a>
            </div>
        </div> 
    `
}

function displayTodoList() {
    const items = loadDataFromLocalStorage();
    const listItemContainer = document.getElementsByClassName('listItem')[0];
    var listItemHtml = "";
 
    for (let i = 0; i < items.length; i++) {
        listItemHtml += createTodoItemElement(items[i], i);        
    }

    listItemContainer.innerHTML = listItemHtml;

    document.querySelectorAll('.itemDelete').forEach(deleteButton => {
        deleteButton.addEventListener("click", function (event) {
            event.preventDefault();
            deleteItem(deleteButton);
        });
    });
}

function deleteItem(deleteButton) {
    const index = parseInt(deleteButton.dataset.id);

    var todoList = loadDataFromLocalStorage();

    todoList.splice(index, 1);

    persistDataToLocalStorage(todoList);

    displayTodoList();
}

displayTodoList();

function isValid() {
    const newTodo = document.getElementById('inputNewTodo').value;
    if(newTodo === "") {
        return false
    }
    return true
}

function addTodo() {
    if(!isValid()) {
        alert(".. is not valid")
        return;
    }

    const newTodo = document.getElementById('inputNewTodo').value;
    var todoList = loadDataFromLocalStorage()
    todoList.push({
        name:newTodo,
    })
    localStorage.setItem('todoList', JSON.stringify(todoList))
    // console.log(newTodo);
}
