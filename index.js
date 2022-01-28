// Сегодня напишем простой самый простой TODO лист без графического интерфейса.
//
//     Хранилищем будет объект, а имена задач - ключами.
//     const list = {
//     "create a new practice task": "In Progress",
//     "make a bed": "Done",
//     "write a post": "To Do",
// }
//
// Функция changeStatus - будет менять статус задачи
// changeStatus("write a post", "Done")
//
// Функция addTask - добавляет новую задачу
// addTask('have a walk')
//
// Функция deleteTask - удаляет задачу
// deleteTask('have a walk')
//

//         Создайте список дел, добавьте в него пару задач, поменяйте их статусы несколько раз и выведете результат в консоль
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
    let tabs = '\t';
    console.log(' Todo:')
    for (let key in list) {
        if (list[key] === 'To Do') {
            console.log(`${tabs}"${key}"`);
            tabs += tabs;
        }
    }
    tabs='\t\t';
    console.log(`${tabs}In Progress:`);
    tabs='\t';
    for(let key in list){
        if(list[key]==='In Progress'){
            console.log(`${tabs}"${key}"`);
            tabs+=tabs;
        }
    }

    console.log(' Done:');
    tabs='\t';
    for(let key in list){
        if (list[key] === 'Done') {
            console.log(`${tabs}"${key}"`);
            tabs += tabs;
        }
    }

}
addTask('Prepare for work');
changeStatus('Prepare for work', 'Done')
addTask('Go for a walk with dog');
addTask('Revise some themes');
addTask('hometask');
changeStatus('hometask', 'In Progress');
changeStatus('Go for a walk with dog', 'In Progress');
// Функция showList будет выводить весь список дел в виде
// Todo:
//     "create a new practice task",
//         "make a bed",
//         In Progress:
//     "write a post"
// Done:
//     -
//

showList();

