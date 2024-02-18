const root = document.getElementById('root');

const head= document.createElement('h1');
head.textContent = "Digital Clock";

const image = document.createElement('img');
image.className = 'image';
// image.setAttribute('src', './clock_img.jpeg');

function render(root, time) {
    
    const clockDiv = document.createElement('div');
    clockDiv.textContent = time;
    clockDiv.className = 'clock';

    // Clear the content 
    root.innerHTML = '';

   
    // ui show

    const maindiv = document.createElement('div');
    maindiv.className = 'maindiv';
    // maindiv.appendChild(image);
    maindiv.appendChild(head)
    maindiv.appendChild(clockDiv)
    
    root.appendChild(maindiv)
}

// update clock

function showtime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`;

    // pass to render to update
    render(root,  time);
}


setInterval(showtime, 1000);
showtime();



// Create DIv

// const maindiv = document.createElement('div');
// maindiv.className = 'maindiv';
// maindiv.appendChild(head)

// root.appendChild(maindiv)

