import { Component, Inject, OnInit, Optional, Output } from '@angular/core';
import {DateRange, MatDatepickerModule} from '@angular/material/datepicker';
import { EventEmitter, Injectable } from "@angular/core";

import { CalendarApiService } from './../calendar-popup/calendar-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Injectable({
  providedIn: "root"
})
@Component({
  selector: 'app-calendar-popup',
  templateUrl: './calendar-popup.component.html',
  styleUrls: ['./calendar-popup.component.scss']
})
export class CalendarPopupComponent implements OnInit {
  selected: Date = new Date();
  inputStyle: string ="form-group1";
  inputStyle2: string ="form-group1";
  hide:boolean= true;
  hide2:boolean= true;
  @Output() duration = new EventEmitter();
  @Optional() @Inject(MAT_DIALOG_DATA) public data: any



  constructor( public datepicker: MatDatepickerModule,
    public dialogRef: MatDialogRef<CalendarPopupComponent>,
    ) {}
  ngOnInit(): void {}
  selectedDateRange: DateRange<Date> | undefined | DateRange<null>  ;

  _onSelectedChange(date: Date): void {
    if (
      this.selectedDateRange &&
      this.selectedDateRange.start &&
      date > this.selectedDateRange.start &&
      !this.selectedDateRange.end
    ) {
      this.selectedDateRange = new DateRange(
        this.selectedDateRange.start,
        date
      );
    } else {
      this.selectedDateRange = new DateRange(date, null);
    }
  }
 onClickInput(){
  if( this.inputStyle="form-group1"){
    this.hide= false;
    this.inputStyle="form-group"

  }

else 
this.inputStyle="form-group1"
 }
 onClickInput2(){
   if( this.inputStyle2="form-group1"){
    this.hide2= false;
    this.inputStyle2="form-group"

   }
  else this.inputStyle2="form-group1"
   }
onClickClear(){

  this.selectedDateRange = new DateRange(null,null);
}
onNoClick(): void {
  //this.dialogRef.close();
  this.dialogRef.close({data: this.selectedDateRange});

}
onClickApply(){
// save the date value 
this.duration.emit(this.selectedDateRange)
this.onNoClick()

}
}
