import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private studentsService: StudentService) { }
  students: Observable<Student[]>;
  addNewStudent = false;

  ngOnInit() {
    this.students = this.studentsService.getStudents();
  }

  studentAdded() {
    this.addNewStudent = false;
  }
  addStudent() {
    this.addNewStudent = true;
  }

}

// interface - is an class with methods that has no implementation.
