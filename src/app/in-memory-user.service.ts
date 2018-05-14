import { User } from './User';

export class InMemoryUserService {
  createDb() {
    const users: User[] = [
      { id: 1, login: 'admin', password: 'admin', profile: 'ADMIN' },
      { id: 2, login: 'user', password: 'user', profile: 'USER' }
    ];
    return { users };
  }
}
