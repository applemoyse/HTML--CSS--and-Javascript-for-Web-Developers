(function(window) { // Wrapped the entire contents of SpeakGoodBye.js inside of an IIFE
	var speakWord = "Good Bye";
	var byeSpeaker = function (name) { //Created an object, called 'byeSpeaker' and exposed it to the global context
  		console.log(speakWord + " " + name);
	}
	
	window.byeSpeaker = byeSpeaker;

})(window);
