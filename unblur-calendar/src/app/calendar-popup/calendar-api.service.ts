import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Booking } from './Booking';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarApiService {
  bookingURL = 'http://localhost:5001/api';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'text/html; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Access-Control-Request-Headers': '*',
    'Access-Control-Allow-Headers': '*',
  });

  constructor(private httpClient: HttpClient) {}

  // Add
  AddBooking(data: Booking): Observable<any> {
    let API_URL = `${this.bookingURL}/booking`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  //Get list
  GetBookings(): Observable<any> {
    let API_URL = `${this.bookingURL}/bookings`;
    return this.httpClient.get(API_URL).pipe(catchError(this.handleError));
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
