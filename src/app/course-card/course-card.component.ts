import { Component,EventEmitter,input,Input,OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
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

  cardClasses(){
    if(this.course.category == 'BEGINNER'){
      return 'beginner';
    }
  }
}