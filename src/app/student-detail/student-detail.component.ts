import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input()
  student: Student;

  isEdit = false;

  constructor() { }

  ngOnInit() {
  }

}
