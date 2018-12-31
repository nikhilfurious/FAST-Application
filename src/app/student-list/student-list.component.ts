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
  showStudent = false;
  selectedStudent: Student = null;

  ngOnInit() {
    this.students = this.studentsService.getStudents();
  }

  studentAdded() {
    this.addNewStudent = false;
  }
  addStudent() {
    this.addNewStudent = true;
    this.selectedStudent = null;
  }
  showStudentDetail(student: Student) {
    this.selectedStudent = student;
  }
  deleteStudent(student: Student) {
    this.selectedStudent = null;
    const result = this.studentsService.deleteStudent(student.id);
    result.then(() => console.log('student deleted'));
    result.catch((err) => console.log(`error deleting student : ${err}`));


  }

}

// interface - is an class with methods that has no implementation.
