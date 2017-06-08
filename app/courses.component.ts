import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{title}}
        <ul>
            <li *ngFor="#course of courses">
            {{ course }}
            </li>
        </ul>
        <input type="text" style="width: 120px" autoGrow />
        `,
     providers: [CourseService],
     directives: [AutoGrowDirective]
})
export class CoursesComponent {
    title = "Writing courses";
    courses;

    constructor(courseService: CourseService){
         this.courses = courseService.getCourses();
    }
}