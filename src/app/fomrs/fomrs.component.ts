import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-fomrs',
  templateUrl: './fomrs.component.html',
  styleUrls: ['./fomrs.component.css']
})
export class FomrsComponent implements OnInit {
  constructor() {
  }

  sex = [
    {gender: 'male'},
    {gender: 'flame'}
  ];

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      sex: new FormControl('male')
    });
  }

  onSubmit() {
    console.log('submited', this.form)
  }
}
