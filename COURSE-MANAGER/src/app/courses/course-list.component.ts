import { Component, OnInit } from "@angular/core";

import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

    constructor (private coursesService: CourseService){}
    
    filteredCourses: Course[] = [];

    _courses: Course[] = [];

    _filterBy: string = '';

    ngOnInit(): void{
        this._courses = this.coursesService.retrieveAll();
        this.filteredCourses = this._courses;
    }

    set filter(value: string){
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}