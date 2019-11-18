console.log("Hello from JavaScript");
const marker = require("/marker.js");

const mapboxgl = require("mapbox-gl");
mapboxgl.accessToken = 'pk.eyJ1IjoiY2VsaWFtYWNyYWUiLCJhIjoiY2szNG93ODlnMDNudTNsb2FjOWp4MzdlMyJ9.LvAEHueXHC8b5aBymH1Hbw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

new mapboxgl.Marker(marker('hotel')).setLngLat([-74.009151, 40.705086]).addTo(map);


