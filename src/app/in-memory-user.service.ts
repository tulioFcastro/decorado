import { User } from './User';

export class InMemoryUserService {
  createDb() {
    const users: User[] = [
      { id: 1, login: 'admin', password: 'admin', type: 'admin' },
      { id: 2, login: 'user', password: 'user', type: 'default' }
    ];
    return { users };
  }
}
