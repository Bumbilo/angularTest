import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-fomrs',
  templateUrl: './fomrs.component.html',
  styleUrls: ['./fomrs.component.css']
})
export class FomrsComponent implements OnInit {

  constructor(private _auth: AuthService) {
  }

  country = [
    {name: 'Russia', shortName: 'rus'},
    {name: 'Ukraine', shortName: 'ua'},
    {name: 'Belorusia', shortName: 'bel'},
  ];

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        first_name: new FormControl('', Validators.required),
        last_name: new FormControl('', [Validators.required, this.checkForLength]),
      }),
      email: new FormControl('', [Validators.required, Validators.email], this.checkForEmail),
      password: new FormControl(''),
      countryes: new FormControl('ua')
    });
  }

  chartsCount = 5;

  checkForLength = (control: FormControl) => {
    if (control.value.length <= this.chartsCount) {
      return {'lengthError': true};
    }
    return null;
  };

  checkForEmail = (control: FormControl): Promise<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@mail.ru') {
          resolve({
            'emailsUsed': true
          });
        } else {
          resolve(null);
        }
      }, 3000);
    });
  };

  onSubmit() {
    console.log('submited!!', this.form);
  }

  changeRules(status) {
    if (status === 'login') {
      this._auth.logIn();
    } else {
      this._auth.logOut();
    }
  }

}
