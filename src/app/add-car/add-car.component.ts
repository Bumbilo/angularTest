import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carName = '';
  carYear = 2017;
  @Output() emmitCar = new EventEmitter<{ name: string, year: number }>();
  @ViewChild('carYearInput') carYearInput: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }


  addCar(input: HTMLInputElement) {
    console.log(input.value);
    console.log(this.carYearInput);
    this.emmitCar.emit({
      name: input.value,
      year: +this.carYearInput.nativeElement.value,
    });

    input.value = '';
    this.carYearInput.nativeElement.value = 2017;
  }

  saveName(event) {
    this.carName = event.target.value;
  }

  saveYear(event) {
    this.carYear = event.target.value;
  }

}
