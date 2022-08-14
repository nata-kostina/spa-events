/* eslint-disable import/prefer-default-export */
import { AnyAction } from 'redux';
import { AllActions } from '../store_types/actionCreators';
import Actions from '../store_types/actions';
import { IAuthState } from '../store_types/states';

const AuthInitialState = {
  isAuth: false,
};

export const AuthReducer = (state: IAuthState = AuthInitialState, action: AllActions) => {
  switch (action.type) {
    case Actions.SET_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};
