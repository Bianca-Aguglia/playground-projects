let locations = {'buffalo': {'lat': 42.88,
                            'long': -78.87
}}

let map = L.map('map').setView([locations['buffalo']['lat'], locations['buffalo']['long']], 6);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap'
// }).addTo(map);

const mainLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', {
  minZoom: 3,
  maxZoom: 17,
  attribution: '&copy; <a href="https://carto.com/">carto.com</a> contributors'
});

mainLayer.addTo(map);