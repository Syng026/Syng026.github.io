// 15.8700° N, 100.9925° E -> 15.8700, 100.9925
let map = L.map("map", {
  center: [13.7499, 100.4916], 
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// The Grand Palace: Coordinates: 13.7499° N, 100.4916° E -> 13.7499, 100.4916
L.circle([13.7499, 100.4916], {
        fillColor: 'gold',
        color: 'white',
        radius: 1000
}).addTo(map);
