// // @ts-ignore
// let L = window.L;
// const API_URL ='https://raw.githubusercontent.com/sefatanam/FD-GEE/main/coordinates.json'

// const RUC = {
//     lat: 25.575770,
//     lon: 89.827652
// }

// var poorIcon = L.icon({
//     iconUrl: './po.png',
//     iconSize: [33, 44],
//     shadowSize: [50, 64],
//     iconAnchor: [17, 53],
//     shadowAnchor: [4, 62],
//     popupAnchor: [-3, -76]
// });

// var richIcon = L.icon({
//     iconUrl: './ri.png',
//     iconSize: [42, 35],
//     shadowSize: [50, 64],
//     iconAnchor: [16, 55],
//     shadowAnchor: [4, 62],
//     popupAnchor: [-3, -76]
// });


// var map = L.map('map').setView([RUC.lat, RUC.lon],23);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 10,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);


// window.addEventListener('load', async () => {

//     const result = await fetch(API_URL);
//     const coordinates = await result.json()

//     coordinates.forEach((data) => {

//         L.marker([data.latitude, data.longitude], { icon: data.type === 'Rich' ? richIcon : poorIcon }).bindPopup(`
//         <p>Name: <b>${data.name}</b></p>
//         <p>Occupation: <b>${data.occupation}</b></p>
//         <p>Disability: <b>${data.disability}</b></p>
//         <p>Income Group: <b>${data.income_group}</b></p>
//         `).openPopup().addTo(map);
//     })
// })




// @ts-ignore
let L = window.L;
const API_URL1 = 'https://raw.githubusercontent.com/sefatanam/FD-GEE/main/coordinates.json'

const RUC1 = {
    lat: 25.575770,
    lon: 89.827652
}

// Create an ArcGIS map using Leaflet
var map = L.map('map').setView([RUC1.lat, RUC1.lon], 14);
const apiKey = "AAPK4e26410b987e4981a988d07d06ac60299BxCXaGSosEPbRJvpa4hiLF6eOkSsa2pz4BnqUySPWhc9UIVuNaVoj8yseQQV8yd";


L.esri.Vector.vectorBasemapLayer("arcgis/outdoor", {
    apikey:apiKey
}).addTo(map);
// Add an ArcGIS basemap layer
// L.esri.Vector.vectorBasemapLayer('Streets',{
//     apikey:apiKey
// }).addTo(map);

window.addEventListener('load', async () => {

    const result = await fetch(API_URL1);
    const coordinates = await result.json()

    coordinates.forEach((data) => {

        // Create a point with coordinates
        var point = L.latLng(data.latitude, data.longitude);

        // Create a marker with a custom icon (image)
        var marker = L.marker(point, {
            icon: L.icon({
                iconUrl: data.type === 'Pucca' ? './ri.png' : './po.png',
                iconSize: data.type === 'Pucca' ? [42, 35] : [33, 44],
                shadowSize: [50, 64],
                iconAnchor: [16, 55],
                shadowAnchor: [4, 62],
                popupAnchor: [-3, -76]
            })
        });

        // Create a popup for the marker
        marker.bindPopup(`
        <p>Occupation: <b>${data.occupation}</b></p>
        <p>Disability: <b>${data.disability}</b></p>
        <p>Income Group: <b>${data.income_group}</b></p>
        `);

        // Add the marker to the map
        marker.addTo(map);

        // Open the popup by default
        marker.openPopup();
    })
})
