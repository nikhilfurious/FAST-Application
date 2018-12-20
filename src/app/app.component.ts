import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FaceService } from './face.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fast-poc';
  items: Observable<any[]>;

  constructor(db: AngularFirestore, private faceService: FaceService) {
    this.items = db.collection('items').valueChanges();
    faceService.getStudents();
  }

}
