import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-mod',
  templateUrl: './student-mod.component.html',
  styleUrls: ['./student-mod.component.css']
})
export class StudentModComponent implements OnInit {

  // studentForm =  new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   year: new FormControl(''),

  // });
  // studentForm: FormGroup;

  @Output()
  studentAdded: EventEmitter<boolean> = new EventEmitter(false);
  studentForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    year: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private studentService: StudentService) {

   }

  ngOnInit() {

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
