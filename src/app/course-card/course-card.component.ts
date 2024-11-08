import { Component,EventEmitter,input,Input,OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit{
  
  @Input({
    required: true
  })
  course:Course;

  @Input()
  cardIndex:number

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor(){}

  ngOnInit(): void {
    
  }

  onCourseViewed(){
    this.courseEmitter.emit(this.course);
  }
}