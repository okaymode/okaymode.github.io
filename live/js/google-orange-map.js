
// google-map//
var map = L.map('map').setView([27.664827, -81.515755], 8);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
const locations = {
    Florida:{
        coords:[27.664827, -81.515755],
        title:"Green heaven",
        img: '../img/feature/feature-4.png',
        iconImage:'../img/map-icon/map-icon-orange-1.svg',
        address:`
        <h3>Green heaven</h3>
        <p>Park Avenue, Florida</p>
        <h5>Apartment</h5>
        <h4>$3500</4>`,  
    },
}
for (let key in locations){
    const location = locations[key];
    var myIcon = L.icon({
        iconUrl: location.iconImage,
        iconSize: [60, 85],
    });
    L.marker(location.coords,{
        icon: myIcon,
        title:location.title,
    })
    .bindPopup(`
        <div class="popup">
            <img src="${location.img}">
            <div>
                ${location.address}
            </div>
        </div>
    `).addTo(map);
}




