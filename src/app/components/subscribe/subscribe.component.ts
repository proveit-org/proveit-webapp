import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ProveitService } from '../../services/proveit.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private proveIt: ProveitService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

  }

  async subscribe() {
    this.loading = true;
    try {
      const response = await this.proveIt.signup({language: 'en', ...this.form.value}).toPromise();
      if (response && response.success) {
        this.snackBar.open('Successfully signed up!', 'Success', { duration: 5000 });
      } else {
        this.snackBar.open('Unable to signup', 'Error', { duration: 5000 });
      }
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.snackBar.open('Unable to signup', 'Error', { duration: 5000 });
      console.log(error);
    }
  }

}
