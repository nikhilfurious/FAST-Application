import { Injectable } from '@angular/core';
import * as MSCSFACEAPI from 'mscs-face-api';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaceService {
  private faceApi: any;
  personGroupId = 'nikhilchandhak';
  personGroup: any;
  students: any;
  constructor() {
    this.faceApi = new MSCSFACEAPI(
      environment.faceapi.key,
      environment.faceapi.region
    );
    this.intializeFaceData();
  }

  intializeFaceData() {
    this.faceApi
      .getPersonGroup(this.personGroupId)
      .then(data => {
        this.personGroup = data;
      })
      .catch(err => {
        console.log(`Error in getting person group: ${err}`);
      });
  }

  addPerson(name: string, image: any): Promise<any> {
    let person: any;
    const personResult: Promise<any> = this.faceApi.createPerson(
      this.personGroupId,
      name
    );
    personResult
      .then(data => {
        person = data;
      })
      .catch(err => {
        console.log(`Error in adding person ${err}`);
      });

    return personResult;
  }

  getStudents() {
    console.log('get students ');
  }
}
