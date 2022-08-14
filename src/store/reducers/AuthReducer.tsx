/* eslint-disable import/prefer-default-export */
import { AllActions } from '../store_types/actionCreators';
import Actions from '../store_types/actions';
import { IAuthState } from '../store_types/states';

const AuthInitialState = {
  isAuth: true,
  user: {
    email: 'test@gmail.com',
    password: 'test',
    isAuth: true,
    username: 'Test Username',
  },
};

export const AuthReducer = (state: IAuthState = AuthInitialState, action: AllActions) => {
  switch (action.type) {
    case Actions.SET_AUTH:
      return { ...state, isAuth: action.payload };
    case Actions.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
