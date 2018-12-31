import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { FileUpload, Student } from '../models';

@Component({
  selector: 'app-student-mod',
  templateUrl: './student-mod.component.html',
  styleUrls: ['./student-mod.component.css']
})
export class StudentModComponent implements OnInit, OnChanges {

  uploadedFile: FileUpload = null;
  @Output()
  studentAdded: EventEmitter<boolean> = new EventEmitter(false);
  @Input()
  studentForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    year: ['First', Validators.required],
  });

  @Input()
  student: Student = null;

  id = null;
  year = ['First', 'Second', 'Third', 'Final'];

  constructor(private fb: FormBuilder, private studentService: StudentService) {

   }

  ngOnInit() {
    // this.studentForm = this.fb.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   year: ['First', Validators.required],
    // });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`changes = ${changes}`);
    if (changes.student ) {
      this.id = changes.student.currentValue.id;
      this.studentForm.patchValue(changes.student.currentValue);
    }
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

  updateStudent() {
    const updatedStudent: Student = this.studentForm.value;
    updatedStudent.fileUpload = this.uploadedFile;
    updatedStudent.id = this.id;
   const result: Promise<any> = this.studentService.updateStudent(updatedStudent);
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
