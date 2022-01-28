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
// Функция showList будет выводить весь список дел в виде
// Todo:
//     "create a new practice task",
//         "make a bed",
//         In Progress:
//     "write a post"
// Done:
//     -
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


