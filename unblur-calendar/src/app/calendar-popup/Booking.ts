import { Type } from "@angular/core";
import { DateRange } from "@angular/material/datepicker";

export class Booking {
    _id!: String;
    fullName: String | undefined;
    phoneNumber!: String;
    hotelName!: String;
    roomType!:String;
    bookingState!:Boolean;
    duration!: DateRange<Date>;
    startDate!:Date;
    endDate!:Date;
}