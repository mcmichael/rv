import {Injectable, Component} from 'angular2/core';


@Injectable()

export class SpeechService {

	
	constructor() {
		console.log('constructor');

	}

	recognize() {

		return new Promise(function(resolve, reject) {

			var recognizer = new webkitSpeechRecognition();

			recognizer.lang = "fr";

			recognizer.addEventListener('result', function(event) {
				console.log('Recognition completed');
				for (var i = event.resultIndex; i < event.results.length; i++) {
					if (event.results[i].isFinal) {
						resolve(event.results[i][0].transcript);
					}
				}
			});

			recognizer.addEventListener('error', function(event) {
				console.log('Recognition error');
				reject('error: An error has occurred while recognizing: ' + event.error);
			});

			recognizer.addEventListener('nomatch', function(event) {
				console.log('Recognition ended because of nomatch');
				reject('nomatch: sorry but I could not find a match');
			});

			recognizer.addEventListener('end', function(event) {
				console.log('Recognition ended');
				// If the Promise isn't resolved or rejected at this point
				// the demo is running on Chrome and Windows 8.1 (issue #428873).
				reject('end: sorry but I could not recognize your speech');
			});

			console.log('Recognition started');
			recognizer.start();
		});
	}

	speak(){
		return new Promise(function(resolve, reject){
			
			
		})
	}






}
