// 15.8700° N, 100.9925° E -> 15.8700, 100.9925
let map = L.map("map", {
  center: [15.8700, 100.9925], 
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
