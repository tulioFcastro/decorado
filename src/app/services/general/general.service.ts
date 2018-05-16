import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../../User';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GeneralService {
  private usersUrl = 'app/users';
  private profiles = [
    {value: 'ADMIN', viewValue: 'Administrador'},
    {value: 'USER', viewValue: 'Usuário'}
  ];

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http
      .get<User[]>(this.usersUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  // getUser(id: number): Observable<User> {
  //   return this.getUsers().pipe(
  //     map(users => users.find(user => user.id === id))
  //   );
  // }

  save(user: User) {
    if (user.id) {
      return this.put(user);
    }
    return this.post(user);
  }

  // Add new User
  private post(user: User) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<User>(this.usersUrl, user)
      .pipe(catchError(this.handleError));
  }

  delete(user: User) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.usersUrl}/${user.id}`;

    return this.http.delete<User>(url).pipe(catchError(this.handleError));
  }

  // Update existing User
  private put(user: User) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.usersUrl}/${user.id}`;

    return this.http.put<User>(url, user).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return res.error;
  }

  getProfiles() {
    return this.profiles;
  }
}
