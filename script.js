const clearBtn = document.getElementById ('clearBtn')
const findBtn = document.getElementById('findBtn')
const searchInput = document.getElementById('searchInput')
const addInput = document.getElementById('addInput')
const addBtn = document.getElementById('addBtn')

function init() {
    if (!!(window.localStorage.getItem('todoList'))){
        todoList = JSON.parse(window.localStorage.getItem(todoList))
    }else {
        todoList = [];
    }
    addBtn.addEventListener('click' , saveTodo);
    showList();
}

// Initialisation terminer

function showList() {
    if(!!todoList.lenght) {
        getLastTodoId();
        for (var item in todoList)
        var todo = todoList[item]
        addTodoToList(todo)
    }
    syncEvents();
    
}