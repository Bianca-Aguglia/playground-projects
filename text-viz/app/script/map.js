let locations = {'buffalo': {'lat': 42.88,
                            'long': -78.87},
                  'rome': {'lat': 41.9028,
                          'long': 12.4964}}


let map = L.map('map').setView([locations['rome']['lat'], locations['rome']['long']], 2);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap'
// }).addTo(map);

const mainLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', {
  minZoom: 1,
  maxZoom: 17,
  attribution: '&copy; <a href="https://carto.com/">carto.com</a> contributors'
});

mainLayer.addTo(map);



/* slider */
var timelineSlider = document.getElementById('timeline-slider')
// var timelineSliderAfter = window.getComputedStyle(element, ':after')
var output = document.getElementById('year')
output.innerHTML = timelineSlider.value

// update the current slider value (each time you drag the slider handle)
timelineSlider.oninput = function() {
  output.innerHTML = this.value
}