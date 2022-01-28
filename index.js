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
    let counter = 0;
    let whiteSpace = '\t';
    console.log(' Todo:')
    //Finding ToDo in the object
    for (let key in list) {
        if (list[key] === 'To Do') {
            console.log(`${whiteSpace}"${key}"`);
            whiteSpace += whiteSpace;
            counter++;
        }
    }
    //Checking if there are any todo in the list
    if (counter === 0) {
        console.log('\t -');
    }
    counter = 0;
    whiteSpace = '\t\t';
    console.log(`${whiteSpace}In Progress:`);
    whiteSpace = '\t';
    //Finding In Progress in the object
    for (let key in list) {
        if (list[key] === 'In Progress') {
            console.log(`${whiteSpace}"${key}"`);
            whiteSpace += whiteSpace;
            counter++;
        }
    }
    //Checking if there are any In Progress in the list
    if (counter === 0) {
        console.log('\t -')
    }
    counter = 0;
    console.log(' Done:');
    whiteSpace = '\t';
    //Finding Done in the object
    for (let key in list) {
        if (list[key] === 'Done') {
            console.log(`${whiteSpace}"${key}"`);
            whiteSpace += whiteSpace;
            counter++;
        }
    }
    //Checking if there are any Done in the list
    if (counter === 0) {
        console.log('\t -')
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

