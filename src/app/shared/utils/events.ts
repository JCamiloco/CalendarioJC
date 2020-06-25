import { EventInput } from '@fullcalendar/angular';

const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
let eventId = 0;

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Evento todo el día',
    start: TODAY_STR
  },
];

export function createEventId() {
  return String(eventId++);
}

export function sumeDay(day: number) {
  let date = new Date();
  date.setDate(date.getMonth() + day);
  return date.toISOString().replace(/T.*$/, '');
}
