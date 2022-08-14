import { UserParams } from '../../types/types';

export interface IAuthState {
  isAuth: boolean;
  user: UserParams | null,
}
