var os = require('os');
var iFluxClient = require('iflux-node-client').Client;
var Event = require('iflux-node-client').Event;

var iFluxClient = new iFluxClient("https://iflux.herokuapp.com");
var hostname = os.hostname();
var delay = 1000 * 60 * 5 // 15'

var description = "Simple clock";

var task = function() {
	var properties = {
		description : description,
		delay : delay,
		hostname : hostname
	};
		
	var event = new Event("io.iflux.events.current-time-event", properties);
	console.log("Send event to iFLUX: " + new Date());
	iFluxClient.notifyEvent(event);
}

task();
setInterval(task, delay);
