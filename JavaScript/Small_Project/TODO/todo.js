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














