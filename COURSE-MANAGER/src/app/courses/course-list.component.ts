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
        this.retriaveAll();
    }

    retriaveAll(): void {
        this.coursesService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        })
    }

    delete(courseId: number): void {
        this.coursesService.deleteById(courseId).subscribe({
            next: () => {
                console.log('Deleted with success'),
                this.retriaveAll()
            },
            error: err => console.log('Error: ', err)        
        })
    }

    set filter(value: string){
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}