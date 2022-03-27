import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CalendarPopupComponent } from './calendar-popup/calendar-popup.component';
import {DefaultMatCalendarRangeStrategy, MatDatepickerModule, MAT_DATE_RANGE_SELECTION_STRATEGY} from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { CustomDateAdapter } from './custom.date.adapter';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HomeComponent,
    CalendarPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [{
    provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
    useClass: DefaultMatCalendarRangeStrategy,
  },
  {provide: DateAdapter, useClass: CustomDateAdapter }],
  bootstrap: [AppComponent]
})
export class AppModule { }
