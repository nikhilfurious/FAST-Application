import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FaceService } from './face.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fast-poc';
  items: Observable<any[]>;
  user: any = null;
  constructor(db: AngularFirestore, private faceService: FaceService, public afAuth: AngularFireAuth) {
    this.items = db.collection('items').valueChanges();
    faceService.getStudents();

    this.afAuth.user.subscribe((data) =>{
      this.user = data;
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
        .then((user: any) => {
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
