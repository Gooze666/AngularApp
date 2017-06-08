import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorComponent} from './authors.component'
import {MessagesComponent} from './messages.component'
import {IconComponent} from './icon.component'

@Component({
    selector: 'my-app',
    template: `
    <div id="MainDiv" style="margin-left:40px">
    <courses></courses>
    <br>
    <br>
    <favorite></favorite>
    <authors></authors>
    <messages></messages>
    </div>
    `,
    directives: [CoursesComponent, AuthorComponent, MessagesComponent, IconComponent]
})
export class AppComponent { 
    isActive = true;
    isActive2 = false;

    onClick($event){
        console.log("Clicked", $event);
    }

    onStarClick(){

    }
}