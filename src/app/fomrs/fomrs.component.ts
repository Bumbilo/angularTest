import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-fomrs',
  templateUrl: './fomrs.component.html',
  styleUrls: ['./fomrs.component.css']
})
export class FomrsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  country = [
    {name: 'Russia', shortName: 'rus'},
    {name: 'Ukraine', shortName: 'ua'},
    {name: 'Belorusia', shortName: 'bel'},
  ];

  defaultCountry = 'ua';

  sex = [
    {gender: 'male'},
    {gender: 'flame'}
  ];

  onSendForm(value: HTMLFormElement) {
    console.log(value);
  }

}
