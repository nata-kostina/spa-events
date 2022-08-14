/* eslint-disable no-param-reassign */
import users from '../data/users';
import { IUser, UserParams } from '../types/types';

class UserService {
  static getUser({ email, password }: UserParams): IUser | undefined {
    return users.find((u) => u.email === email && u.password === password);
  }

  static getUsers(): IUser[] {
    return users;
  }
}

export default UserService;
