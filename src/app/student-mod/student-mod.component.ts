import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { FileUpload, Student } from '../models';

@Component({
  selector: 'app-student-mod',
  templateUrl: './student-mod.component.html',
  styleUrls: ['./student-mod.component.css']
})
export class StudentModComponent implements OnInit {

  uploadedFile: FileUpload = null;
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
    const newStudent: Student = this.studentForm.value;
    newStudent.fileUpload = this.uploadedFile;
   const result: Promise<any> = this.studentService.addStudent(newStudent);
    result.then(data => {
      console.log('student added.');
      this.studentAdded.emit(true);
    })
    .catch(err => console.error(err));
  }

  onFileUploaded(uploadedFile: FileUpload) {
    this.uploadedFile = uploadedFile;
  }

  onCancel() {
    this.studentForm.reset();
    this.studentAdded.emit(false);
  }

}
