// @ts-ignore
let L = window.L;

const RUC = {
    lat: 25.575770,
    lon: 89.827652
}

// Will fetch from github API
const Coordinates = [
  
    {
        lat: 25.515758,
        lon: 89.817442,
        type: 'Rich'
    },
    {
        lat: 25.595758,
        lon: 89.997112,
        type: 'Poor'
    },
   
]

var poorIcon = L.icon({
    iconUrl: './po.png',
    iconSize: [33, 44],
    shadowSize: [50, 64],
    iconAnchor: [17, 53],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
});

var richIcon = L.icon({
    iconUrl: './ri.png',
    iconSize: [42, 35],
    shadowSize: [50, 64],
    iconAnchor: [16, 55],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
});


var map = L.map('map').setView([RUC.lat, RUC.lon],23);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


window.addEventListener('load', () => {
    Coordinates.forEach((data) => {
        // L.marker([data.lat, data.lon]).addTo(map);
        if (data.type === 'Rich') {
            L.marker([data.lat, data.lon], { icon: richIcon }).bindPopup(`Rich Family`).openPopup().addTo(map);
        } else if (data.type === 'Poor') {
            L.marker([RUC.lat, RUC.lon], { icon: poorIcon }).bindPopup(`Poor Family`).openPopup().addTo(map);
        }
    })
})

