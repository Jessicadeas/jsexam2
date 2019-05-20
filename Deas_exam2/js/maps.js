function init() {
  var mapChoice = {         
    zoom: 17,  
    center: new google.maps.LatLng(33.667630, -78.936490),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
   
	
	panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.TOP_LEFT
    },
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_CENTER
    },
	 scaleControl: true,
    scaleControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER
    },
    streetViewControl: true,
    overviewMapControl: true,
    position: google.maps.ControlPosition.TOP_CENTER
	
  };
  var venueMap;                                      
  venueMap = new google.maps.Map(document.getElementById('map'), mapChoice);
}

function loadScript() {
  var script = document.createElement('script');     
  script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyCsJoAN2SEz7zmgZ_UIYQ_X6ZcrfoUpbFg&callback=init';
  document.body.appendChild(script);                 
}

window.onload = loadScript;                          