import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';



@Component({
  selector: 'app-msda-test-component',
  templateUrl: './msda-test-component.component.html',
  styleUrls: ['./msda-test-component.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MsdaTestComponentComponent implements OnInit {

  // @ViewChild('myTestButton') myTestButton: ElementRef;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


  constructor() {
  }

  ngOnInit() {
    // console.log(this.myTestButton);
  }
}
