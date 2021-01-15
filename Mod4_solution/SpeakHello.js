(function(window) { // Wrapped the entire contents of SpeakHello.js inside of an IIFE
	var speakWord = "Hello";
	var helloSpeaker = function (name) { //Created an object, called 'helloSpeaker' and exposed it to the global context
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);
