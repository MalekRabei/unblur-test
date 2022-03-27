import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  hide = true;
  title = 'unblur-calendar';

  onClickHide(): boolean{
    if(this.hide === true) 
    this.hide = !this.hide;
    console.log("clicked!")
    return this.hide
  }
}
