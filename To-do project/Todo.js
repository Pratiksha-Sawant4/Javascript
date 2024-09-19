
let todoList = [
    {
         item : 'add',
         dueDate : '4/10/2023'
    },
    { 
        item : 'Go to Hell ', 
        dueDate : '33/10/2023'
    },

];

DisplayItems();

function addTodo() {
    
    let inputElement = document.querySelector('#todo-input');
    let inputDate = document.querySelector('#todo-date');

    let ItemElement =  inputElement.value;
    let ItemDate =  inputDate.value;

    inputElement.value = '';
    inputDate.value = '';

    // todoList.push(ItemElement);
    todoList.push({ item : ItemElement , dueDate : ItemDate });
    // console.log(todoList);



    DisplayItems();

}

/*
function DisplayItems() {

    let containterItem = document.querySelector(`#todo-containter`);

    showItem.innerText = '';
    for (let index = 0; index < todoList.length; index++) {
        
        showItem.innerText = showItem.innerText +"\n"+ todoList[index];
    }
}
*/

function DisplayItems() {

    let containterItem = document.querySelector(`.todo-containter`);
    let newHTML = '';
    
    for (let index = 0; index < todoList.length; index++) {
        
        // let item = todoList[index].item;
        // let dueDate = todoList[index].dueDate;
        
        let {item , dueDate} = todoList[index];

        newHTML += 
        `
        <span>${item} </span> 
        <span>${dueDate} </span> 

        <button  class="btn-delete"
        onclick="todoList.splice(${index},1) ;
        DisplayItems()";>
        Delete </button>
        

        `;
    }

    containterItem.innerHTML = newHTML;


}

