import { IEvent, LSKeys } from '../types/types';
import LocalStorage from '../utils/localStorage';

class EventsService {
  static setEvent(event: IEvent) {
    LocalStorage.setItem({ key: LSKeys.EVENTS, value: event });
  }
}

export default EventsService;
