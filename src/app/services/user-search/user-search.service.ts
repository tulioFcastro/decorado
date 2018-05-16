import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { User } from '../../User';

@Injectable()
export class UserSearchService {
  private usersUrl = 'app/users';

  constructor(private http: HttpClient) {}

  search(term): Observable<any[]> {
    return this.http
      .get<User[]>(`${this.usersUrl}/?login=${term}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return res.error;
  }
}
