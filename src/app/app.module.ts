import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { RouterModule, Routes, Router} from '@angular/router';
import { PrincipalCalendarComponent } from './calendar/principal-calendar/principal-calendar.component';
import { PrincipalControlComponent } from './calendar/principal-control/principal-control.component';
import { SecondaryCalendarComponent } from './calendar/secondary-calendar/secondary-calendar.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
]);

export const routes: Routes = [
  {path: '', redirectTo: '/calendar', pathMatch: 'full'},
  {path: 'calendar', component: PrincipalControlComponent }];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalCalendarComponent,
    PrincipalControlComponent,
    SecondaryCalendarComponent
  ],
  imports: [
    FullCalendarModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
