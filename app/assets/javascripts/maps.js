document.addEventListener("DOMContentLoaded", function() {
	let platform = new H.service.Platform({
		'apikey': window.API_KEY
	});
				      
	// Obtain the default map types from the platform object:
	let defaultLayers = platform.createDefaultLayers();
      
	// Instantiate (and display) a map object:
    let map = new H.Map(
    	document.getElementById('mapContainer'),
		defaultLayers.vector.normal.map,
    	{
        	zoom: 4,
        	center: { lat: 39.83333, lng: -98.58333 }
   		}
    );
});



			      
