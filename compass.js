'use strict';



function initCompass(){
	let compass = document.getElementById('compass-icon'),
		speed = document.getElementById('speed'),
		errorBox = document.querySelector('.error-heading'),
		geolocationStatus = document.querySelector('.green'),
		listjson = document.querySelector('.geolocationdata');


	if (navigator.geolocation) {
		geolocationStatus.textContent = 'geo location browser';
		// navigator.geolocation.getCurrentPosition(moveIconCoords);
	
		navigator.geolocation.watchPosition(function(data){
			console.log(data);
			let listitem = document.createElement('li');
		
			speed.textContent = data.coords.speed + "mph";
			compass.style.transform = "rotate("+data.coords.heading+"deg)";
			listitem.textContent = data.coords.heading;

			console.log(typeof data);
			

			listjson.appendChild(listitem);
			
		}, function(err){
			// errorBox.textContent = 'LOCATION PERMISSION DENIED. COMPASS NOT GOING TO WORK';
		});

		
	}else{
		console.log('not a geo location browser');
		
	}
}


document.getElementById('location').addEventListener('click', initCompass);
// initCompass();

