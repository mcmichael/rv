import {Component,Input,Output,EventEmitter} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {ExpressionComponent} from '../expression/expression';
import {SpeechService} from '../../services/speech';

@Component({
	selector: 'entry-form',
	templateUrl: 'app/components/entry/entry-form.component.html'
})

export class EntryFormComponent {

	entryExpression: ExpressionComponent = { id: 1, value: 'First value' };
	valueExpression = '';
	
	constructor(
		private _speechService: SpeechService) {
	}

	Speech() {
		this._speechService.recognize().then(text => {
			this.entryExpression.value = JSON.stringify(text);
			//this._speechService.speak().then(this.entryExpression.value);
			//return this.
		}, err => {
			console.log('Speech error', err);
			this.entryExpression.value = err;
		});
	}

}

