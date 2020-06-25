import { Component, OnInit } from '@angular/core';
import { EventApi } from '@fullcalendar/core';

@Component({
  selector: 'app-principal-control',
  templateUrl: './principal-control.component.html',
  styleUrls: ['./principal-control.component.css']
})
export class PrincipalControlComponent implements OnInit {

  event: EventApi[];
  constructor() {  }

  ngOnInit(): void {
  }

  progapation(event: EventApi[]) {
    console.log(event);
    this.event = event;
  }

}
