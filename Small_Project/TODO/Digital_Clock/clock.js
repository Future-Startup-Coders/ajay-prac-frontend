const root = document.getElementById('root');

const head= document.createElement('h1');
head.textContent = "Digital Clock";

function render(root, time) {
    

    
    const clockDiv = document.createElement('div');
    clockDiv.textContent = time;
    clockDiv.className = 'clock';

    // Clear the content 
    root.innerHTML = '';

   
    // ui show
    const maindiv = document.createElement('div');
    maindiv.className = 'maindiv';
    maindiv.appendChild(head)
    maindiv.appendChild(clockDiv)
    root.appendChild(maindiv)
}

// update clock

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`;

    // pass to render to update
    render(root,  time);
}


setInterval(updateClock, 1000);

updateClock();



// Create DIv

// const maindiv = document.createElement('div');
// maindiv.className = 'maindiv';
// maindiv.appendChild(head)

// root.appendChild(maindiv)

