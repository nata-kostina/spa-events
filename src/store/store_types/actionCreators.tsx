import Actions from './actions';

export interface SetAuth {
  type: Actions.SET_AUTH,
  payload: boolean;
}

export type AllActions = SetAuth;
