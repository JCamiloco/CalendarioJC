import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalCalendarComponent } from './principal-calendar/principal-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { PrincipalControlComponent } from './principal-control/principal-control.component';
import { SecondaryCalendarComponent } from './secondary-calendar/secondary-calendar.component';

@NgModule({
  declarations: [
    PrincipalControlComponent,
    PrincipalCalendarComponent,
    SecondaryCalendarComponent],
  imports: [
    CommonModule,
    FullCalendarModule
  ],
})
export class CalendarModule { }
