//////////////////////////////////////////////////
// Get the information from the input
// and then display the element in the console, then
// the html.
/////////////////////////////////////////////////
let userTask=document.getElementById("txTask");

let indexTask = 0;


function registerTask(){
    console.log(userTask.value);
    let template=`<li id="${indexTask}">${userTask.value} <button onclick="deleteTask(${indexTask})">🗑️</button> </li>`;
    document.getElementById("todoList").innerHTML+=template;

    clearForm();

    indexTask++;
}


function deleteTask(indexTask){
    document.getElementById(indexTask).remove();
}


function clearForm(){
    userTask.value="";
}