$(document).ready(function() {

	var s = Snap("#ss");

	var sun = s.circle(600, 360, 40).attr({fill: "#FDB813"});


	function Planet(x, y, radius, fill, path, duration, start) {
		start = start || false;
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.fill = fill;
		this.path = s.path(path).attr({stroke: "#666", fill: "none", "stroke-dasharray": "5, 4"});
		this.duration = duration;
		

		this.planet = s.circle(x, y, radius).attr({fill: fill});

		if (start) {
			this.animate();
		}
	}

	Planet.prototype.animate = function() {
		var len = Snap.path.getTotalLength(this.path), 
			elBB =  this.planet.getBBox(),
			elCenter = {
				x: elBB.x + (elBB.width / 2),
				y: elBB.y + (elBB.height / 2),
			},
			start = 0,
			easing = '',
			self = this;

		Snap.animate(
			start,
			len,
			function (value) {
				var movePoint = Snap.path.getPointAtLength(self.path, value);
				self.planet.transform('t'+ (movePoint.x - elCenter.x) + ',' + (movePoint.y - elCenter.y));
			}, 
			self.duration, 
			easing, 
			self.animate.bind(this)
			// ***** WHAT DOES .bind DO *****
		);
	}

	mercury = new Planet(530, 360, 4, "#b93620", "M530,360a70,70 0 1,0 140,0a70,70 0 1,0 -140,0", 4000, true);
	venus = new Planet(510, 360, 5, "#dbc6a3", "M510,360a90,90 0 1,0 180,0a90,90 0 1,0 -180,0", 5000, true);
	earth = new Planet(480, 360, 6, "#006994", "M480,360a120,120 0 1,0 240,0a120,120 0 1,0 -240,0", 5600, true);
	mars =  new Planet(460, 360, 5, "#864c39", "M460,360a140,140 0 1,0 280,0a140,140 0 1,0 -280,0", 6000, true);
	jupitor =  new Planet(400, 360, 16, "#dbc6a3", "M400,360a200,200 0 1,0 400,0a200,200 0 1,0 -400,0", 10000, true);
	saturn =  new Planet(360, 360, 9, "none", "M360,360a240,240 0 1,0 480,0a240,240 0 1,0 -480,0", 12000, true);
	uranus =  new Planet(330, 360, 6, "#c9eff0", "M330,360a270,270 0 1,0 540,0a270,270 0 1,0 -540,0", 14000, true);
	neptune =  new Planet(300, 360, 6, "#4163fd", "M300,360a300,300 0 1,0 600,0a300,300 0 1,0 -600,0", 18000, true);
	pluto =  new Planet(240, 360, 2, "#4d5462", "M240,360a360,280 0 1,0 720,0a360,280 0 1,0 -720,0", 22000, true);

	// console.log(mercury);
	// console.log(venus);
	// console.log(mercury.__proto__.animate === venus.__proto__.animate);
	// mercury.myFunc();
	// venus.myFunc();
	// console.log(mercury.myFunc === venus.myFunc);

	saturn.ring1 =  s.ellipse(360, 360, 16, 2).attr({stroke: "#75673d", "stroke-width": "2px", fill: 'none'});
	saturn.ring2 =  s.ellipse(360, 360, 20, 4).attr({stroke: "#75673d", "stroke-width": "2px", fill: 'none'});
	saturn.core =  s.circle(360, 360, 9).attr({fill: "#75673d"});
	saturn.planet =  s.g(saturn.core, saturn.ring1, saturn.ring2);
});





