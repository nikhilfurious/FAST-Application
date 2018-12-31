import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Student } from '../models/student';
import { Observable } from 'rxjs';

const students = 'students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: AngularFirestoreCollection<Student>;

  constructor(private db: AngularFirestore) {
    this.students = this.db.collection(students);
  }
  getStudents(): Observable<Student[]> {
    return this.db.collection(students).valueChanges() as Observable<Student[]>;
  }

  getStudent(id) {
    return this.db.doc<any>(`${students}/${id}`);
  }

  addStudent(student: Student): Promise<any> {
    const id = this.db.createId();
    const newStudent: Student = {id, ...student};
    return this.students.doc(id).set(newStudent);
  }

  updateStudent(updateStudent: Student): Promise<any> {
    const student = this.db.doc<any>(`students/${updateStudent.id}`);
    return student.update(updateStudent);

  }

  deleteStudent(id: string) {
    const student = this.db.doc<any>(`students/${id}`);
    return student.delete();
  }
}
