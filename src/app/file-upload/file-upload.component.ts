import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from '../../../node_modules/rxjs';
import { finalize } from 'rxjs/operators';
import { FileUpload } from '../models/file-upload';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor(private storage: AngularFireStorage) { }

  selectedFile: File;

  downloadURL: Observable<string>;

  uploadPercent: Observable<number>;

  @Output()
  fileUploaded: EventEmitter<FileUpload> = new EventEmitter(null);

  ngOnInit() {
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    const filePath = `student-pictures/${this.selectedFile.name}`;
    const fileRef: AngularFireStorageReference = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, this.selectedFile);

    this.uploadPercent = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe((fileUrl) => {
          const fileUpload: FileUpload = {
            fileName : this.selectedFile.name,
            filePath : filePath,
            downloadUrl: fileUrl
          };
          this.fileUploaded.emit(fileUpload);
        });

      })
   )
  .subscribe();
  }

}
