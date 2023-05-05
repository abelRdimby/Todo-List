function validationRequirement() {
    var addTodo = document.getElementById('inputNewTodo').value
    var resultValue = document.getElementById('renduValue')

    if (addTodo === ""){
        alert('Desription is required')
        return false
}
return true
}

function showData() {
    var todoList ;
    if (localStorage.getItem('todoList') == null){
        todoList = [];
    }else{
        todoList = JSON.parse(localStorage.getItem('todoList'))
    }

    var html = "";

todoList.forEach(function (element){
  html += "<p>" + element.description + "</p>"
  console.log(todoList)
})

document.querySelector('#renduValue').innerHTML = html;
  

}



function addData() {
    if(validationRequirement() == true) {
        var todoList ;
        if (localStorage.getItem('todoList') == null){
            todoList = [];
        }else{
            todoList = JSON.parse(localStorage.getItem('todoList'))
        }

        todoList.push({
            description:description
          })
      
          localStorage.setItem('todoList', JSON.stringify
          (todoList))
          showData();
          document.getElementById('inputNewTodo').value = "";

        }
  
    }




function deleteData(index){
    var deleteBtn = documeny.getElementById('deleteItem')
    var todoList;
    if(localStorage.getItem("todoList") == null){
      todoList = []
    }else{
      todoList = JSON.parse(localStorage.getItem("todoList"));
    }
  
    todoList.splice(index, 1)
    localStorage.setItem("todoList", JSON.stringify
    (peopleList))

    showData()
  
  }
  document.onload = showData();
