import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {
  id: string;
  name: string;

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit() {
   // this.id = this._route.snapshot.params.id;
   // this.name = this._route.snapshot.params.name;

   this._route.params.subscribe((params: Params) => {
      console.log(params);
      this.id = params.id;
      this.name = params.name;
   });
   console.log(this.id, this.name);

  }

}
