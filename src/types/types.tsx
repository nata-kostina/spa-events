import { Moment } from 'moment';

export enum SPARoutes {
  LOGIN = '/login',
  EVENTS = '/events',
  HOMEPAGE = '/',
}

export interface IUser {
  email: string,
  password: string,
  isAuth: boolean,
  username: string,
}

export type UserParams = Omit<IUser, 'isAuth'>;

export interface IGuest {
  name: string,
}

export interface IEvent {
  title: string,
  date: Moment,
  guests: IGuest[],
}

export interface LSItem {
  key: string,
  value: IEvent,
}

export enum LSKeys {
  EVENTS = 'events',
  IS_AUTH = 'is_auth',
  USER = 'user',
}
