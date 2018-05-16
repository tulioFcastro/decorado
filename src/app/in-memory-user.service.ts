import { User } from './User';

export class InMemoryUserService {
  createDb() {
    const users: User[] = [
      { id: 1, login: 'admin', name: 'Admin test', password: 'admin', profile: 'ADMIN' },
      { id: 2, login: 'user', name: 'User test', password: 'user', profile: 'USER' }
    ];
    return { users };
  }
}
