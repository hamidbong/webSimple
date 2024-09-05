document.getElementById('add-task').addEventListener('click', function() {
    let taskInput = document.getElementById('new-task');
    let task = taskInput.value.trim();

    if (task) {
        let taskList = document.getElementById('task-list');
        
        let li = document.createElement('li');
        li.textContent = task;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Supprimer';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        
        taskInput.value = '';  // Clear input after adding
    }
});
