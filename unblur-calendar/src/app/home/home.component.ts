import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  hide = true;
  title = 'unblur-calendar';

  onClickHide(): boolean{
    if(this.hide === true) 
    this.hide = !this.hide;
    console.log("clicked!")
    return this.hide
  }
  ngOnInit(): void {
  }

}
