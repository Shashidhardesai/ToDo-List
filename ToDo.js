function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const Datee=document.getElementById("dd");
   

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = () => {
            li.classList.toggle('completed');
        };
        
        const span = document.createElement('span');
        span.textContent = taskInput.value;
        
        const pp=document.createElement('p');
        pp.textContent=Datee.value;

        const delBut = document.createElement('button');
        delBut.textContent = 'Delete';
        delBut.onclick = () => {
            taskList.removeChild(li);
        };
        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(pp)
        li.appendChild(delBut);
        taskList.appendChild(li);
        
        taskInput.value = '';

        Datee.value='';
    }
    else{
        alert("Name must be Entered")
    }
}
function zoomIn() {
    document.body.style.zoom = parseFloat(document.body.style.zoom || 1) + 0.1;
}

function zoomOut() {
    document.body.style.zoom = parseFloat(document.body.style.zoom || 1) - 0.1;
}


function searchTasks() {
    const sInput = document.getElementById('sInput').value.toLowerCase();
    const tasks = document.getElementById('taskList').getElementsByTagName('li');

    for(const task of tasks){
        const ele=task.getElementsByTagName('span')[0].textContent.toLowerCase();
        if(ele.includes(sInput) ){
            task.style.display='';
        }
        else{
            task.style.display='none'
        }
    }
}
function seadata(){
    const sin=document.getElementById("ddd").value;
    const din=document.getElementById("taskList").getElementsByTagName("li");
    for( const gro of din ){
       const  taskName=gro.getElementsByTagName("p")[0].textContent;
       if(taskName===sin){
        gro.style.display = '';
        sin.value='';
       }
       else{
        gro.style.display = 'none';
       }
    }
}



