import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CalendarOptions, EventApi, DateSelectArg, EventClickArg } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from '../../shared/utils/events';
import esLocale from '@fullcalendar/core/locales/es';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal-calendar',
  templateUrl: './principal-calendar.component.html',
  styleUrls: ['./principal-calendar.component.scss']
})
export class PrincipalCalendarComponent {

  @Input() event: EventApi[];

  @Output()
  propagar = new EventEmitter<EventApi[]>();

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'timeGridWeek',
    locale: esLocale,
    initialEvents: INITIAL_EVENTS, // Crea eventos por defecto
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
  };

  currentEvents: EventApi[] = [];

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const calendarApi = selectInfo.view.calendar;
    let colorEvent: string;
    Swal.fire({
      title: 'Agregar evento:',
      html:  '<label class="label">Color del evento</label> ' +
      '<input type="color" value="#3788d8" id="swal-input-color">',
      input: 'text',
      inputPlaceholder: 'Nombre del evento',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value) {
          return 'El campo no puede ir vacio!';
        } else {
          colorEvent = (document.getElementById('swal-input-color') as HTMLInputElement).value;
          calendarApi.unselect(); // Limpia la selección
          calendarApi.addEvent({
              id: createEventId(),
              title: value,
              start: selectInfo.startStr,
              end: selectInfo.endStr,
              allDay: selectInfo.allDay,
              color: colorEvent
            });
          Swal.fire({
              title: 'Creado correctamente!',
              icon: 'success',
          });
        }
      }
    });
  }

  handleEventClick(clickInfo: EventClickArg) {
    console.log(clickInfo);
    Swal.fire({
      title: `¿Estas seguro de eliminar el evento '${clickInfo.event.title}'?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        clickInfo.event.remove();
        Swal.fire({
          title: 'Eliminado correctamente!',
          icon: 'success',
        });
      }
    });
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.propagar.emit(this.currentEvents);
  }

}
