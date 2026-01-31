const worldBounds = [
    [-200, -180], // юг, запад
    [ 200,  180]  // север, восток
];

const map = L.map('map', {
    center: [0, 0],
    zoom: 2,
    minZoom: 2.5,
    maxZoom: 15,
    maxBounds: worldBounds,
    maxBoundsViscosity: 1.0, // 🔥 жёсткое ограничение
    zoomControl: false,
    attributionControl: false
});
// =====================
// 📍 КООРДИНАТЫ
// =====================
const you = [41.67302, 44.84697];   // ты
const her = [56.77780, 60.60085];   // она

// =====================
// 📍 МАРКЕРЫ
// =====================
const youMarker = L.circleMarker(you, {
    radius: 6,
    color: '#ffffff',
    fillColor: '#ff6b81',
    fillOpacity: 1
}).addTo(map).bindPopup('Я');

const herMarker = L.circleMarker(her, {
    radius: 6,
    color: '#ffffff',
    fillColor: '#ff6b81',
    fillOpacity: 1
}).addTo(map).bindPopup('Ты');

// =====================
// ➖ ЛИНИЯ МЕЖДУ ТОЧКАМИ
// =====================
const line = L.polyline([you, her], {
    color: '#ffb6c1',
    weight: 3,
    opacity: 0.9
}).addTo(map);

// =====================
// 🏷️ ТЕКСТ НА ЛИНИИ
// =====================

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    noWrap: true
}).addTo(map);
