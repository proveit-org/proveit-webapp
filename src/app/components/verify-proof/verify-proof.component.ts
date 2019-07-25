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

  constructor(
    private proveIt: ProveitService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  verifyFile(file: File) {
    console.log(file.name, file.size);
    let reader = new FileReader();
    reader.onload = async (event: {target}) => {
      const data = event.target.result;
      this.hash = SHA256(data) + '';
      try {
        const response = await this.proveIt.verify(this.hash).toPromise();
        this.proofs = JSON.parse(JSON.stringify(response)).proofs;
        this.snackBar.open('File proof received', 'Success', { duration: 5000 });
        this.finished = true;
      } catch (error) {
        console.log(error);
      }
    };
    reader.readAsBinaryString(file);
  }

  reset() {
    this.finished = false;
  }

}
