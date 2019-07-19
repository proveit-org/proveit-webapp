import { Component, OnInit } from '@angular/core';
import { SHA256 } from 'crypto-js'
import { ProveitService } from '../../services/proveit.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'proveit-open-document',
  templateUrl: './open-document.component.html',
  styleUrls: ['./open-document.component.sass']
})
export class OpenDocumentComponent implements OnInit {

  finished = false;

  constructor(
    private proveIt: ProveitService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  processFile(file: File) {
    console.log(file.name, file.size)
    var reader = new FileReader();
    reader.onload = async (event: {target}) => {
      const data = event.target.result;
      const hash = SHA256(data);
      try {
        const response = await this.proveIt.store(hash).toPromise()
        this.snackBar.open(response, 'Success', { duration: 5000 })
        this.finished=true
      } catch (error) {
        console.error(error)
      }
    };
    reader.readAsBinaryString(file);
  }

}
