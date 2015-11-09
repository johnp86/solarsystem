$(document).ready(function() {

	var s = Snap("#ss");

	var sun = s.circle(600, 360, 40).attr({fill: "#FDB813"});

	// Circle Object
	function Circle(x, y, radius, fill) {
		this._circle = s.circle(x, y, radius).attr({fill: fill});
		this.boundingBox = this._circle.getBBox();
		this.center = {
			x: this.boundingBox.x + (this.boundingBox.width / 2),
			y: this.boundingBox.y + (this.boundingBox.height / 2),
		}
	}

	Circle.prototype.transform = function(string) {
		this._circle.transform(string);
	}

	Circle.prototype.groupWith = function(circles) {
		var rawCircles = circles.map(function(circle) {
			return circle._circle;
		});

		return s.group.apply(s, rawCircles.concat(this._circle));
	}

	// Planet Object
	function Planet(x, y, radius, fill, path, duration, moons, start) {
		start = start || false;
		
		this.path = s.path(path).attr({stroke: "#666", fill: "none", "stroke-dasharray": "5, 4"});
		this.radius = radius;
		this.duration = duration;
		this.moons = moons;
		this.moonArr = [];

		this.planet = new Circle(x, y, radius, fill);

		this.createMoons();

		this.group();

		if (start) {
			this.orbit();
		}
	}

	Planet.prototype.group = function() {
		this.grouped = this.planet.groupWith(this.moonArr);
	}

	Planet.prototype.orbit = function() {
		var len = Snap.path.getTotalLength(this.path), 
			elCenter = this.planet.center,
			start = 0,
			easing = '',
			self = this;

		Snap.animate(
			start,
			len,
			function (value) {
				var movePoint = Snap.path.getPointAtLength(self.path, value);
				self.grouped.transform('t'+ (movePoint.x - elCenter.x) + ',' + (movePoint.y - elCenter.y));
			}, 
			self.duration, 
			easing, 
			self.orbit.bind(this)
			// ***** WHAT DOES .bind DO *****
		);
	}

	Planet.prototype.createMoons = function() {
		
		var planetCenter 	=   this.planet.center,
			moonNum 		= 	this.moons,
			planetRadius    =  	this.radius;

		moonTransform = 360/moonNum;
		var moonX, moonY;
		for (i=0; i < moonNum; i++) {
			moonX = planetCenter.x + planetRadius + 4;
			moonY = planetCenter.y + planetRadius + 4;

			moon = new Moon(moonX, moonY, planetCenter, moonTransform, i);

			this.moonArr.push(moon);
		}

	}

	// Moon Object
	function Moon(moonX, moonY, planetCenter, moonTransform, i) {
		this.moonX = moonX;
		this.moonY = moonY;
		this.i = i;
		this.moon = new Circle(this.moonX, this.moonY, 1, 'grey');
		this.planetCenter = planetCenter;
		this.moonTransform = moonTransform;
		this.moonOrbit();
	}

	Moon.prototype.moonOrbit = function() {

		this.moon.transform( "r" + (this.moonTransform * this.i) + ", " + this.planetCenter.x + ", " + this.planetCenter.y );
	    this.moon._circle.animate({ 
	    	transform:  "r" + (this.moonTransform * this.i + 360) + ", " + this.planetCenter.x + ", " + this.planetCenter.y  
	    }, 
	    	2000, 
	    	mina.linear, 
	    	this.moonOrbit.bind(this.moon)
	    );
	    //el.transform('r0,150,150'); // some kind of transform reset, or removing the previous completed transform maybe needed.
    	//el.animate({ transform: 'r360,150,150' }, 2000, mina.linear, infRotate.bind( null, el));
	}

	mercury = new Planet(530, 360, 4, "#b93620", "M530,360a70,70 0 1,0 140,0a70,70 0 1,0 -140,0", 4000, 0, true);
	venus = new Planet(510, 360, 5, "#dbc6a3", "M510,360a90,90 0 1,0 180,0a90,90 0 1,0 -180,0", 5000, 0, true);
	earth = new Planet(480, 360, 6, "#006994", "M480,360a120,120 0 1,0 240,0a120,120 0 1,0 -240,0", 5600, 1, true);
	mars =  new Planet(460, 360, 5, "#864c39", "M460,360a140,140 0 1,0 280,0a140,140 0 1,0 -280,0", 6000, 2, true);
	jupitor =  new Planet(400, 360, 16, "#dbc6a3", "M400,360a200,200 0 1,0 400,0a200,200 0 1,0 -400,0", 10000, 10, true);
	saturn =  new Planet(360, 360, 9, "none", "M360,360a240,240 0 1,0 480,0a240,240 0 1,0 -480,0", 12000, 0, true);
	uranus =  new Planet(330, 360, 6, "#c9eff0", "M330,360a270,270 0 1,0 540,0a270,270 0 1,0 -540,0", 14000, 10, true);
	neptune =  new Planet(300, 360, 6, "#4163fd", "M300,360a300,300 0 1,0 600,0a300,300 0 1,0 -600,0", 18000, 9, true);
	pluto =  new Planet(240, 360, 2, "#4d5462", "M240,360a360,280 0 1,0 720,0a360,280 0 1,0 -720,0", 22000, 3, true);

	saturn.ring1 =  s.ellipse(360, 360, 16, 2).attr({stroke: "#75673d", "stroke-width": "2px", fill: 'none'});
	saturn.ring2 =  s.ellipse(360, 360, 20, 4).attr({stroke: "#75673d", "stroke-width": "2px", fill: 'none'});
	saturn.core =  s.circle(360, 360, 9).attr({fill: "#75673d"});
	saturn.grouped =  s.g(saturn.core, saturn.ring1, saturn.ring2);

	
});





