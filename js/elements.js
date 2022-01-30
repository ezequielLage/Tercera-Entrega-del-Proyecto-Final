
/**
 * Elementos del formulario agregar
 */

let inputSelectPais = document.getElementById("inputSelectPais");
let inputSelectAuto = document.getElementById("inputSelectAuto");
let inputDateDesde = document.getElementById("inputDateDesde");
let inputDateHasta = document.getElementById("inputDateHasta");
let result = document.getElementById("result");
let btnAddTodo = document.getElementById("btnAddTodo");


/**
 * Elemento de la lista TODO
 */

let tableTodo = document.getElementById("tableTodo");
let tableTodoDeleted = document.getElementById("tableTodoDeleted");



class TodoList{
    constructor(destino,vehiculo,DateDesde,DateHasta){
        this.destino = destino;
        this.vehiculo = vehiculo;
        this.DateDesde = DateDesde;
        this.DateHasta = DateHasta;
    }
   
}


const addNewTodoList = () =>{ 

    tableTodo.innerHTML = "";
    let tr;

    todoList.forEach((element,i) => {
        tr = document.createElement('tr');
        tr.setAttribute("id", i);
        tr.innerHTML = `<td> Su viaje </td>
                        <td>${element.destino}</td>
                        <td>${element.vehiculo}</td>
                        <td>${element.DateDesde}</td>
                        <td>${element.DateHasta}</td>`;
        tableTodo.appendChild(tr);
    });

   
}


let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
if(todoList.length > 0) addNewTodoList();

 


const addTodo = () =>{
    
    //let destino = inputSelectPais.option[inputSelectPais.selectedIndex].value;
    //let vehiculo = inputSelectAuto.option[inputSelectAuto.selectedIndex].value;
    let destino = inputSelectPais.value;
    let vehiculo = inputSelectAuto.value;
    let DateDesde = inputDateDesde.value;
    let DateHasta = inputDateHasta.value;
    let newTodo = new TodoList(destino, vehiculo, DateDesde, DateHasta);
    todoList.push(newTodo);
    localStorage.setItem("todoList",JSON.stringify(todoList));

    addNewTodoList();
    resetInputs();
    inicialize();
}



// Eventos
btnAddTodo.onclick = (e) =>{
    e.preventDefault();
    addTodo();
}




//localStorage.clear()