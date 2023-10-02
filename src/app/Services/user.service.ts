import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private service:ErrorService) { }

  private url = 'https://reqres.in/api/users';

   getUsers(page: number) {
    return this.http
      .get(this.url + '?page=' + page)
      .pipe(catchError(this.service.handleError));
  }
}
