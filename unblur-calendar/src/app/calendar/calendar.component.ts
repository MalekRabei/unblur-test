import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CalendarPopupComponent } from '../calendar-popup/calendar-popup.component';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { CalendarApiService } from './../calendar-popup/calendar-api.service';
import { DateRange } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  bookingForm: FormGroup;
  fullName: string = '';
  phoneNumber: string = '';
  hotelName: string = '';
  roomType: string = '';
  bookingState: boolean = false;
  duration: DateRange<Date> | undefined | DateRange<null>;
  startDate: Date | undefined;
  endDate: Date | undefined;
  bookingList: any;
  currentIndex = -1;

  showList: boolean = false;
  showForm: boolean = true;

  openDialog() {
    const ref = this.dialog.open(CalendarPopupComponent);

    ref.afterClosed().subscribe((data) => {
      return (this.duration = data.data);
    });
  }

  constructor(
    public dialog: MatDialog,
    public formBuilder: FormBuilder,
    private CalendarApiService: CalendarApiService
  ) {
    this.bookingForm = this.formBuilder.group({
      fullName: this.fullName,
      phoneNumber: this.phoneNumber,
      hotelName: this.hotelName,
      roomType: this.roomType,
      bookingState: true,
    });
  }

  onSaveReservation() {
    this.bookingForm.value.duration = this.duration;
    this.bookingForm.value.startDate = this.duration?.start;
    this.bookingForm.value.endDate = this.duration?.end;

    this.CalendarApiService.AddBooking(this.bookingForm.value).subscribe(
      () => {
        console.log('Data added successfully!');
      },
      (err) => {
        console.log(err);
      }
    );

    this.showList = true;
    this.showForm = false;
    this.getBookingList();
  }

  getBookingList() {
    this.CalendarApiService.GetBookings().subscribe(
      (data) => {
        this.bookingList = data;
        console.log(this.bookingList);
      },

      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.getBookingList();
  }
}
