import {Component, OnInit, ViewEncapsulation} from '@angular/core';



@Component({
  selector: 'app-msda-test-component',
  templateUrl: './msda-test-component.component.html',
  styleUrls: ['./msda-test-component.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MsdaTestComponentComponent implements OnInit {

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


  constructor() {
  }

  ngOnInit() {
  }
}
