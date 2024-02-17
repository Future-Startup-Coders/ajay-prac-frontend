const root = document.getElementById('root');
const head = document.createElement('h1');
head.textContent = 'TO DO LIST';

// Create DIv
const maindiv = document.createElement('div');
maindiv.className = 'maindiv';

// input text

let textdata=document.createElement('input')
textdata.type='text';
textdata.className='input'
textdata.placeholder="Enter Task Here";

// submit button

const submitbutton=document.createElement('button')
submitbutton.className='btn'
submitbutton.textContent="Submit";


// task data add

const todoList = document.createElement('ol');
todoList.className = 'todo-list';

// render call

function render(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;
    todoList.appendChild(listItem);
}

// submit button click

submitbutton.addEventListener('click', function () {
    const task = textdata.value;

    if (task.trim() !== '') {
        render(task);
        textdata.value = '';
    }
});


const changeFiled=document.createElement('div')
changeFiled.className="changeFiled"

changeFiled.appendChild(textdata)
changeFiled.appendChild(submitbutton)
// show on ui
maindiv.appendChild(head)
maindiv.appendChild(changeFiled)
maindiv.appendChild(todoList);

// maindiv.appendChild(button);


root.appendChild(maindiv)
//root.appendChild(text)





























// let submit = document.createElement("button");
// submit.className = 'btn';
// submit.textContent = "Submit";
 
// root.appendChild(maindiv);
// root.appendChild(head);

// function renderTodoList(task) {
 
//     const tr = document.createElement('tr');
//     const task1 = document.createElement('td');
//     task1.textContent = task;
//     tr.appendChild(task1);

    

//     todoList.appendChild(tr);
// }

// submit.addEventListener('click', function () {
//     const taskInput = document.getElementById('taskInput');
//     const task = taskInput.value;

//     if (task.trim() !== '') {
//         renderTodoList(task);
//         taskInput.value = '';
//     } 
// });

// maindiv.appendChild(submit);

// root.appendChild(maindiv);
