import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorComponent} from './authors.component'
import {MessagesComponent} from './messages.component'

@Component({
    selector: 'my-app',
    template: `
    <h1>First Angular 2 App</h1>
    <courses></courses>
    <authors></authors>
    <messages></messages>
    `,
    directives: [CoursesComponent, AuthorComponent, MessagesComponent]
})
export class AppComponent { }