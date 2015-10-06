
animateAlongPath = function (path, el, start, duration, easing, callback) {
	var len = Snap.path.getTotalLength(path), 
		elBB =  el.getBBox(),
		elCenter = {
			x: elBB.x + (elBB.width / 2),
			y: elBB.y + (elBB.height / 2),
		};

	Snap.animate(start, len, function (value) {
		var movePoint = Snap.path.getPointAtLength(path, value);
			el.transform('t'+ (movePoint.x - elCenter.x) + ',' + (movePoint.y - elCenter.y));
		}, duration, easing, function () {
		if (callback) callback(path);
	});
};

var s = Snap("#ss");

var sun = s.circle(600, 360, 40).attr({fill: "#FDB813"});

planet1 = function(x, y, r, fill, path, time) {
	var path = s.path(path).attr({stroke: "#666", fill: "none", "stroke-dasharray": "5, 4"});
	var planet = s.circle(x, y, r).attr({fill: fill});

	console.log(planet);
	animatePlanet1 = function () {
	    animateAlongPath(path, planet, 0, time, animatePlanet1);
	};
	animatePlanet1();
}
planet2 = function(x, y, r, fill, path, time) {
	var path = s.path(path).attr({stroke: "#666", fill: "none", "stroke-dasharray": "5, 4"});
	var planet = s.circle(x, y, r).attr({fill: fill});

	console.log(planet);
	animatePlanet2 = function () {
	    animateAlongPath(path, planet, 0, time, animatePlanet2);
	};
	animatePlanet2();
}
planet3 = function(x, y, r, fill, path, time) {
	var path = s.path(path).attr({stroke: "#666", fill: "none", "stroke-dasharray": "5, 4"});
	var planet = s.circle(x, y, r).attr({fill: fill});

	console.log(planet);
	animatePlanet3 = function () {
	    animateAlongPath(path, planet, 0, time, animatePlanet3);
	};
	animatePlanet3();
}
planet4 = function(x, y, r, fill, path, time) {
	var path = s.path(path).attr({stroke: "#666", fill: "none", "stroke-dasharray": "5, 4"});
	var planet = s.circle(x, y, r).attr({fill: fill});

	console.log(planet);
	animatePlanet4 = function () {
	    animateAlongPath(path, planet, 0, time, animatePlanet4);
	};
	animatePlanet4();
}
planet5 = function(x, y, r, fill, path, time) {
	var path = s.path(path).attr({stroke: "#666", fill: "none", "stroke-dasharray": "5, 4"});
	var planet = s.circle(x, y, r).attr({fill: fill});

	console.log(planet);
	animatePlanet5 = function () {
	    animateAlongPath(path, planet, 0, time, animatePlanet5);
	};
	animatePlanet5();
}

var mercury = planet1(530, 360, 4, "#b93620", "M530,360a70,70 0 1,0 140,0a70,70 0 1,0 -140,0", 4000);
var venus = planet2(510, 360, 5, "#dbc6a3", "M510,360a90,90 0 1,0 180,0a90,90 0 1,0 -180,0", 5000);
var earth = planet3(480, 360, 6, "#006994", "M480,360a120,120 0 1,0 240,0a120,120 0 1,0 -240,0", 5600);
var mars =  planet4(460, 360, 5, "#b93620", "M460,360a140,140 0 1,0 280,0a140,140 0 1,0 -280,0", 6000);
var jupitor =  planet5(400, 360, 16, "#dbc6a3", "M400,360a200,200 0 1,0 400,0a200,200 0 1,0 -400,0", 10000);
var saturn = null;
var uranus = null;
var neptune = null;
var pluto = null;




// $(document).ready(function() {

// 	var s = Snap("#ss");

// 	var sun = s.circle(600, 360, 40).attr({fill: "#FDB813"});

// 	planet = function(x, y, r, fill, path, time) {
// 		var path = s.path(path).attr({stroke: "#666", fill: "none"});
// 		var planet = s.circle(x, y, r).attr({fill: fill});

// 		console.log(planet);
// 		animatePlanet = function () {
// 		    animateAlongPath(path, planet, 0, time, animatePlanet);
// 		};
// 		animatePlanet();
// 	}

// 	var mercury = planet(530, 360, 4, "#b93620", "M530,360a70,70 0 1,0 140,0a70,70 0 1,0 -140,0", 4000);
// 	var venus = planet(510, 360, 5, "#dbc6a3", "M510,360a90,90 0 1,0 180,0a90,90 0 1,0 -180,0", 5000);
// 	var earth = planet(480, 360, 6, "#006994", "M480,360a120,120 0 1,0 240,0a120,120 0 1,0 -240,0", 5600);
// 	var mars =  planet(460, 360, 5, "#b93620", "M460,360a140,140 0 1,0 280,0a140,140 0 1,0 -280,0", 6000);
// 	var jupitor = null;
// 	var saturn = null;
// 	var uranus = null;
// 	var neptune = null;
// 	var pluto = null;

// });


// animateAlongPath = function (path, el, start, duration, easing, callback) {
// 	var len = Snap.path.getTotalLength(path), 
// 		elBB =  el.getBBox(),
// 		elCenter = {
// 			x: elBB.x + (elBB.width / 2),
// 			y: elBB.y + (elBB.height / 2),
// 		};

// 	Snap.animate(start, len, function (value) {
// 		var movePoint = Snap.path.getPointAtLength(path, value);
// 			el.transform('t'+ (movePoint.x - elCenter.x) + ',' + (movePoint.y - elCenter.y));
// 		}, duration, easing, function () {
// 		if (callback) callback(path);
// 	});
// };



