// 'use strict';

function deviceHandler(event) {
	console.log('DEVICE ORIENTATION HANDLER');
	// console.log(data);
	var absolute = event.absolute;
	var alpha = event.alpha;
	var beta = event.beta;
	var gamma = event.gamma;
	var heading = 360 - alpha;
	let compass = document.getElementById('compass-icon');

	listjson = document.querySelector('.geolocationdata');
	listjson.innerHTML = "<span style=\"float: left\">heading: </span>" + Math.round(heading);

	compass.style.transform = "rotate(" + heading + "deg)";
}

if (window.DeviceOrientationEvent) {
	window.addEventListener('deviceorientation', deviceHandler, true);
	document.getElementById("doeSupported").innerText = "Supported!";
}else{
	document.getElementById("doeSupported").innerText = "NOT Supported!";
}

function returnRandomNum(max) {
	return Math.floor(Math.random() * Math.floor(200));
}

function initCompass() {
	let compass = document.getElementById('compass-icon'),
		errorBox = document.querySelector('.error-heading'),
		geolocationStatus = document.querySelector('.green'),
		accuracy = document.getElementById("accuracy"),
		heading = document.getElementById("heading"),
		longitude = document.getElementById("longitude"),
		latitude = document.getElementById("latitude"),
		speed = document.getElementById("speed");



	if (navigator.geolocation) {
		geolocationStatus.textContent = 'geo location browser';

		options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		};

		navigator.geolocation.watchPosition(function (data) {
			console.log(data);
			let listitem = document.createElement('li'),
				accuracy_dta = data.coords.accuracy,
				heading_dta = data.coords.heading,
				longitude_dta = data.coords.longitude,
				latitude_dta = data.coords.latitude,
				speed_dta = data.coords.speed;



			speed.innerHTML = speed_dta + "mph";
			heading.innerHTML = "Heading:" +heading_dta;
			longitude.innerHTML = "Longitude:"+longitude_dta;
			latitude.innerHTML = "Latitude:" +latitude_dta;
			accuracy.innerHTML = "Accuracy:" +accuracy_dta;

		}, function (err) {
			errorBox.innerHTML = 'LOCATION PERMISSION DENIED. COMPASS NOT GOING TO WORK';
		}, options);


	} else {
		console.log('not a geo location browser');

	}
}


document.getElementById('location').addEventListener('click', initCompass);
// initCompass();

// var ball = document.querySelector('.ball');
// var garden = document.querySelector('.garden');
// var output = document.querySelector('.output');

// var maxX = garden.clientWidth - ball.clientWidth;
// var maxY = garden.clientHeight - ball.clientHeight;

// function handleOrientation(event) {
// 	let listitem = document.createElement('li');
// 	var x = event.beta;  // In degree in the range [-180,180]
// 	var y = event.gamma; // In degree in the range [-90,90]

// 	output.innerHTML = "beta : " + x + "\n";
// 	output.innerHTML += "gamma: " + y + "\n";

// 	// Because we don't want to have the device upside down
// 	// We constrain the x value to the range [-90,90]
// 	if (x > 90) { x = 90 };
// 	if (x < -90) { x = -90 };

// 	// To make computation easier we shift the range of 
// 	// x and y to [0,180]
// 	x += 90;
// 	y += 90;

// 	// 10 is half the size of the ball
// 	// It center the positioning point to the center of the ball
// 	ball.style.top = (maxX * x / 180 - 10) + "px";
// 	ball.style.left = (maxY * y / 180 - 10) + "px";

// 		var absolute = event.absolute;
// 		var alpha = event.alpha;
// 		var beta = event.beta;
// 		var gamma = event.gamma;

// 		console.log();
// 		listjson = document.querySelector('.geolocationdata');

// 		listjson.innerHTML = JSON.stringify([absolute, alpha, beta, gamma]);
// 		// listjson.appendChild(listitem);
// }

// window.addEventListener('deviceorientation', handleOrientation);