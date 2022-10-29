(function(){
    let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

async function fetchToDos(){
    //get request
    // fetch("https://jsonplaceholder.typicode.com/todos").then(function (response){
    //     console.log(response);
    //     return response.json();
    // }).then(function (data){
    //     console.log(data);
    //     tasks=data.slice(0,10);
    //     renderList();
    // }).catch((error)=>{
    //     console.log('error',error);
    // })
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/todos");
        const data=await response.json();
        tasks=data.slice(0,10);
        renderList();
    }catch(error){
        console.log('error',error);
    }
}

function addTaskToDOM(task){
    const li=document.createElement('li');
    li.innerHTML = `<input type="checkbox" id='${task.id}' ${task.completed ? 'checked':''} class="custom-checkbox"/>
    <label for="${task.id}">${task.title}</label>

    <i class="bi bi-trash3-fill delete" data-id="${task.id}" id="delete" ></i>` ;

    taskList.append(li);
}


function renderList () {
    taskList.innerHTML='';
    for(let i=0;i<tasks.length;i++){
        addTaskToDOM(tasks[i]);
    }
    tasksCounter.innerHTML=tasks.length;
}

function toggleTask (taskId) {
    const task=tasks.filter(function (task){
        return task.id===Number(taskId);
    });
    if(task.length>0){
        const currentTask=task[0];
        console.log(currentTask.title);

        currentTask.completed=!currentTask.completed;
        renderList();
        showNotification('Task toggled successfully');
        return;
    }
    showNotification('could not find task');

}
    

function deleteTask (taskId) {
    const newtask=tasks.filter(function (task){
        return task.id!==Number(taskId);
    });

    tasks=newtask;
    renderList();
    showNotification('Task deleted successfully');
}

function addTask (task) {
    if(task){
        tasks.push(task);
        renderList();
        showNotification('Task added successfully')
        return;
    }else{
        showNotification('Task cannot be added');
        return;
    }
    
}

function showNotification(text) {
    alert(text);
}

function handleKeyPress (ele){
    if(ele.key==='Enter'){
        const text=ele.target.value;
        if(!text){
            showNotification('Task cannot be empty');
            return;
        }

        const task={
            title: text,
            id: Date.now().toString(),
            completed:false
        }

        ele.target.value='';

        addTask(task);
    }

}

function handleclick(e){
    const elementclicked=e.target;
    
    if(elementclicked.id ==='delete'){
        const taskid=elementclicked.dataset.id;
        deleteTask(taskid);
        return;
    }else if(elementclicked.className ==='custom-checkbox'){
        const taskid=elementclicked.id;
        toggleTask(taskid);
        return;
    }
    
}

function initiateToDoApp(){
    fetchToDos();
    addTaskInput.addEventListener('keyup',handleKeyPress);
    document.addEventListener('click',handleclick);
}

initiateToDoApp();

})();


