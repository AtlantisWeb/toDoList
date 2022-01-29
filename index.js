const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
}

function addTask(task) {
    list[task] = 'To Do';
}

function changeStatus(statusName, newStatus) {
    if (statusName in list) {
        list[statusName] = newStatus;
    }
}

function deleteTask(task) {
    delete list[task];
}

function showList() {
    let toDo = '';
    let inProgress = '';
    let done = '';
    for (let key in list) {
        if (list[key] === 'To Do') {
            toDo += `"${key}"\n\t`;
        } else if (list[key] === 'In Progress') {
            inProgress += `"${key}"\n\t`;
        } else if (list[key] === 'Done') {
            done += `"${key}"\n\t`;
        }
    }
    if (toDo) {
        console.log(`ToDo:\n\t${toDo}`)
    } else {
        console.log('ToDo:\n\t-')
    }
    if (inProgress) {
        console.log(`In Progress:\n\t${inProgress}`)
    } else {
        console.log('In Progress:\n\t-')
    }
    if (done) {
        console.log(`Done:\n\t${done}`)
    } else {
        console.log('Done:\n\t-')
    }
}

addTask('Go for a walk with a dog');
addTask('Go to the gym');
changeStatus('Go to the gym', 'In Progress')
changeStatus('write a post', 'Done')
changeStatus('create a new practice task', 'Done')
changeStatus('Go to the gym', 'Done');
deleteTask('Go to the gym');
showList();
