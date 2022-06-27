import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { List, userPreview } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //62b9514ce20e2d5c6edfc3d8
  baseUrl = 'https://dummyapi.io/data/v1/';

  options = {
    headers: new HttpHeaders()
      .set('content-type', 'application/json')
      .set('app-id', '62b9514ce20e2d5c6edfc3d8'),
  };

  constructor(private http: HttpClient) {}

  getUsers(): Observable<List<userPreview>> {
    // Observable<HttpResponse<List<userPreview>>>
    const url = this.baseUrl + 'user';
    return this.http.get<List<userPreview>>(url, {
      ...this.options,
      params: { created: 1 },
    });
  }

  createUser(body: any): Observable<userPreview> {
    const url = this.baseUrl + 'user/create';

    return this.http.post<userPreview>(url, body, this.options);
  }

  updateUser(
    id: any,
    body: { firstName: string; lastName: string }
  ): Observable<userPreview> {
    const url = this.baseUrl + `user/${id}`;

    return this.http.put<userPreview>(url, body, this.options);
  }

  deleteUser(id: any): Observable<string> {
    const url = this.baseUrl + `user/${id}`;

    return this.http.delete<string>(url, this.options);
  }
  getUserById(id: string): Observable<userPreview> {
    const url = this.baseUrl + 'user/' + id;
    return this.http
      .get<userPreview>(url, {
        ...this.options,
      })
      .pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse): Observable<never> {
    console.log('Inside userService.handleError():', error);
    return throwError('some error occurred on service ');
  }
}
