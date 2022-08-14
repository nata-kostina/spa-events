import users from '../data/users';
import { IUser } from '../types/types';

class UserService {
  static getUser(user: IUser) {
    return users.find((u) => u.email === user.email && u.password === user.password);
  }
}

export default UserService;
