// OSMAP Dashboard (HomePage)
// Harita oluştur
const map = L.map('map-worldd').setView([38.4192, 27.1287], 11);

// OpenStreetMap katmanı ekle
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Marker eklemek istediğiniz noktalar
const points = [
    { coords: [38.4192, 27.1287], title: "İzmir Merkez" },
    { coords: [38.4542, 27.1893], title: "Konak Meydanı" },
    { coords: [38.3770, 27.0800], title: "Balçova Teleferik" },
];

// Marker ekleme
points.forEach(point => {
    L.marker(point.coords).addTo(map).bindPopup(point.title);
});