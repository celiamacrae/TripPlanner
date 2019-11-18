// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
//markerDomEl.style.backgroundColor = "pink";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);




function newMarker(markerType){
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";

  if(markerType === 'activity'){
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }
  else if(markerType === 'hotel'){
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  }
  else if(markerType === 'resturant'){
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }

}


module.exports = { () =>{}
  newMarker(type)
}
