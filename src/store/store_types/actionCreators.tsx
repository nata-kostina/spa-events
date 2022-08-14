import { IUser, UserParams } from '../../types/types';
import Actions from './actions';

export interface SetAuth {
  type: Actions.SET_AUTH,
  payload: boolean;
}

export interface SetUser {
  type: Actions.SET_USER,
  payload: UserParams;
}

export type AllActions = SetAuth |
SetUser;
