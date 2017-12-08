import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {
  id: number;
  name: string;
  color: string;
  year: string;
  hash: string;

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = +this._route.snapshot.params.id;
    // this.color = this._route.snapshot.queryParams.color;
    // this.year = this._route.snapshot.queryParams.year;
    this.hash = this._route.snapshot.queryParams.fragment;

    this._route.params.subscribe((params: Params) => {
      console.log(params);
      this.id = +params.id;
      this.name = params.name;
    });

    this._route.queryParams.subscribe((params: Params) => {
      this.color = params.color;
      this.year = params.year;
    });
  }
}
