import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog} from '@angular/material';
import {MyDialogComponent} from '../my-dialog/my-dialog.component';



@Component({
  selector: 'app-msda-badge',
  templateUrl: './msda-badge.component.html',
  styleUrls: ['./msda-badge.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MsdaBadgeComponent implements OnInit {

  constructor(private _matDialog: MatDialog) {
  }

  ngOnInit() {
  }

  openMyDialog() {
    this._matDialog.open(
      MyDialogComponent, {
        panelClass: 'my-test-no-padding-dialog' // string[]
      }
    );
  }
}
