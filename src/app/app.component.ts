import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FaceService } from './face.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fast-poc';
  items: Observable<any[]>;
  user: any = null;

  constructor(db: AngularFirestore, private faceService: FaceService, public authService: AuthService) {
    this.items = db.collection('items').valueChanges();
    faceService.getStudents();

  }

  ngOnInit() {
    this.authService.user.subscribe(data => this.user = data, err => console.log(err));
  }

  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }

}
