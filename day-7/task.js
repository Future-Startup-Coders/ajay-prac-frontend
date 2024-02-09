let Cities = {
    Pune: {
        img: 'Rajgad_Fort.jpg',
        Cityname: 'CityName:  Pune',
        PlaceName: 'PlaceName: Rajgad',
        Description: "Description: स्वर्ग म्हणतात ना तो कदाचित येथेच असावा,या सह्याद्रीच्या कुशीमध्ये…! #Rajgad Fort."
    }
};

let root = document.getElementById('root');

let img1 = document.createElement('img');
img1.setAttribute('src', Cities.Pune.img);
img1.setAttribute('alt', "no img");
img1.className = 'img';
img1.height = 230;
img1.width = 200;

let city = document.createElement('h2');
city.textContent = Cities.Pune.Cityname;

let place = document.createElement('h2');
place.textContent = Cities.Pune.PlaceName;

let desc = document.createElement('h4');
desc.textContent = Cities.Pune.Description;

let infoDiv = document.createElement('div');
infoDiv.className = 'info';

infoDiv.appendChild(city);
infoDiv.appendChild(place);
infoDiv.appendChild(desc);

let mainDiv = document.createElement('div');
mainDiv.className = 'main';
mainDiv.appendChild(img1);
mainDiv.appendChild(infoDiv);

root.append(mainDiv);