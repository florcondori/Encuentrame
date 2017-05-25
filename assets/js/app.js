function initMap() {
  var laboratoriaLima = {lat: -12.1191427, lng: -77.0349046};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 20,
    center: laboratoriaLima
  });

  var markadorLaboratoria = new google.maps.Marker({
    position: laboratoriaLima,
    map: map
  });
}