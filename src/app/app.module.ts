import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MsdaTestComponentComponent} from './msda-test-component/msda-test-component.component';
import {MyDialogComponent} from './my-dialog/my-dialog.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MsdaTestComponent2Component} from './msda-test-component2/msda-test-component2.component';
import {MsdaBadgeComponent} from './msda-badge/msda-badge.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MsdaChipListComponent} from './msda-chip-list/msda-chip-list.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    MsdaTestComponentComponent,
    MsdaTestComponent2Component,
    MsdaBadgeComponent,
    MsdaChipListComponent,
    MyDialogComponent
  ],
  entryComponents: [
    MyDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSliderModule,
    MatBadgeModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
