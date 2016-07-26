import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {EntryFormComponent} from './components/entry/entry-form.component';
import {SpeechService} from './services/speech';

@Component({
	selector: 'recipe',
	template: '<entry-form></entry-form>',
	directives: [EntryFormComponent],
	providers: [SpeechService]

})

export class AppComponent{

}