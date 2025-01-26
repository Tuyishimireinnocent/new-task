let tasks =  localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]




const addBtn = document.getElementById("add-btn")


addBtn.addEventListener('click',(e) =>{
    e.preventDefault()
    const taskNameInput =document.querySelector('#task-name-input')
    const taskName=taskNameInput.value.trim();  // Get the value written in the input field

    const newTask = {
        name:taskName,
        isCompleted:false
    }
    tasks.unshift(newTask)     // Add the new task to the tasks array
    taskNameInput.value = ''
    saveTasks();            // Save to local storage
    displayTasks();
})

const saveTasks = ()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks)) //Save tasks array to local storage as string
}



const toggleCompleted = (e,index)=>{
    tasks = JSON.parse(localStorage.getItem("tasks"))
    tasks[index].isCompleted = !tasks[index].isCompleted
    saveTasks();
    displayTasks();
}

document.toggleCompleted = toggleCompleted

const deleteTask = (e,index)=>{
    let confirmation = confirm('do you want to delete this task ?') 
    if(confirmation){
        tasks = JSON.parse(localStorage.getItem("tasks"))
        tasks.splice(index,1);
        saveTasks();
        displayTasks()
    }
    
}

document.deleteTask = deleteTask;

const displayTasks = () =>{

    tasks =  localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]
    const taskDivision = document.querySelector(".tasks")
    taskDivision.innerHTML = ''

    tasks.forEach((task,index) => {
        const taskcard = `
        <div class="task ${task.isCompleted?'completed':''}">
            <i class="fa-solid fa-square-check" onclick='toggleCompleted(event,${index})'></i>
            <p class="task-name">${task.name}</p>
            <i class="fa-solid fa-trash-can" onclick='deleteTask(event,${index})'></i>
        </div>`

        taskDivision.innerHTML += taskcard   
    });  
}
displayTasks();

const clearCompleted =document.querySelector('.clear')

clearCompleted.addEventListener('click',(e) =>{
   let confirmation = confirm('are you sure for clear Task?')
   if(confirmation){

    tasks =  localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]
    tasks.forEach((task,index)=>{

        if(task.isCompleted) tasks.splice(index,1)

    })
    saveTasks()
    displayTasks()
   }
    
    
 })

 
 



