import { Component, OnInit, ElementRef } from '@angular/core';
import { SHA256 } from 'crypto-js';
import { ProveitService } from '../../services/proveit.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'proveit-open-document',
  templateUrl: './open-document.component.html',
  styleUrls: ['./open-document.component.scss']
})
export class OpenDocumentComponent implements OnInit {

  finished = false;
  upload = false;
  password = '';
  hash = '';

  constructor(
    private proveIt: ProveitService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  async processFile(files: FileList) {
    const file = files.item(0);
    const reader = new FileReader();
    reader.onload = async (event: {target}) => {
      const data = event.target.result;
      this.hash = SHA256(data) + '';

      if (this.upload) {
        this.uploadHashAndFile(this.hash, file);
      } else {
        this.uploadHash(this.hash);
      }
    };
    reader.readAsBinaryString(file);
  }

  async uploadHash(hash: string) {
    const meta = {};
    try {
      const response = await this.proveIt.store(hash, meta).toPromise();
      if (response === 'SUCCESS') {
        this.snackBar.open('File registered successfully!', 'Success', { duration: 5000 });
      }
      this.finished = true;
    } catch (error) {
      console.log(error);
    }
  }

  async uploadHashAndFile(hash: string, file) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('hash', hash);
    if (this.password) {
      formData.append('password', this.password);
    }

    try {
      const response = await this.proveIt.storeFile(formData).toPromise();
      if (response === 'SUCCESS') {
        this.snackBar.open('File uploaded successfully!', 'Success', { duration: 5000 });
      }
      this.finished = true;
    } catch (error) {
      console.log(error);
    }
  }

  reset() {
    this.finished = false;
  }

}
