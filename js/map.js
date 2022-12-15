// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 60.60642420654568, lng: 15.632235438064592},
//     zoom: 20,
//     mapId: 'd8e7c4f0dd9a101b'
//   });
// }

// window.initMap = initMap;

function initMap() {
    const myLatLng = { lat: 60.606048858517774, lng: 15.63185461296047 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      mapId: 'd8e7c4f0dd9a101b',
      center: myLatLng,
      disableDefaultUI:!0
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
}
  
  window.initMap = initMap;