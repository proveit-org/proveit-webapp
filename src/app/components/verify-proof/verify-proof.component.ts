import { Component, OnInit } from '@angular/core';
import { SHA256 } from 'crypto-js';
import { ProveitService } from '../../services/proveit.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'proveit-verify-proof',
  templateUrl: './verify-proof.component.html',
  styleUrls: ['./verify-proof.component.scss']
})
export class VerifyProofComponent implements OnInit {

  finished = false;
  proofs: any = {};
  hash: string;
  hasFile = false;
  hasPassword = false;

  constructor(
    private proveIt: ProveitService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  verifyFile(file: File) {
    console.log(file.name, file.size);
    const reader = new FileReader();
    reader.onload = async (event: {target}) => {
      const data = event.target.result;
      this.hash = SHA256(data) + '';
      this.verifyFileFromHash(this.hash);
    };
    reader.readAsBinaryString(file);
  }

  async verifyFileFromHash(hash: string) {
    try {
      const response = await this.proveIt.verify(hash).toPromise();
      const result = JSON.parse(JSON.stringify(response));
      this.proofs = result.proofs;
      this.hasFile = result.hasFile;
      this.hasPassword = result.hasPassword;
      this.snackBar.open('File proof received', 'Success', { duration: 5000 });
      this.finished = true;
    } catch (error) {
      console.log(error);
    }
  }

  async download(hash: string, password: string) {
    try {
      const response = await this.proveIt.download(hash, password).toPromise();
      this.proveIt.downLoadFile(response, 'application/pdf');
    } catch (error) {
      console.log(error);
    }
  }

  reset() {
    this.finished = false;
    this.hash = '';
    this.hasFile = false;
    this.hasPassword = false;
  }

}
