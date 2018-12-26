import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '../../../node_modules/@angular/fire/auth';
import * as firebase from 'firebase';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: EventEmitter<firebase.User> = new EventEmitter(null);

  constructor(public afAuth: AngularFireAuth) {
    this.initialize();
  }

  initialize() {
    this.afAuth.user.subscribe((data: firebase.User) => {
      this.user.emit(data);
    });
  }

  login(): Promise<auth.UserCredential> {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }
  // authState: FirebaseAuthState = null;

  // constructor(
  //   private af: AngularFire,
  //   private db: AngularFireDatabase,
  //   private router: Router
  // ) {
  //   af.auth.subscribe(auth => {
  //     this.authState = auth;
  //   });
  // }
}
