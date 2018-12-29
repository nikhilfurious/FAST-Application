import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-mod',
  templateUrl: './student-mod.component.html',
  styleUrls: ['./student-mod.component.css']
})
export class StudentModComponent implements OnInit {

  studentForm =  new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    year: new FormControl(''),

  });
  // studentForm: FormGroup;

  @Output()
  studentAdded: EventEmitter<boolean> = new EventEmitter(false);

  constructor(private fb: FormBuilder, private studentService: StudentService) {

   }

  ngOnInit() {
    // this.studentForm = this.fb.group({
    //   firstName: [''],
    //   lastName: [''],
    //   year: ['']
    // });
  }

  addStudent() {
    const result: Promise<any> = this.studentService.addStudent(this.studentForm.value);
    result.then(data => {
      console.log('student added.');
      this.studentAdded.emit(true);
    })
    .catch(err => console.error(err));
  }

}
