import { Injectable } from '@angular/core';
import { Login } from '../models/login-model';
import {HttpClient} from '@angular/common/http';
import { Observable,catchError} from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private service:ErrorService) {}
  private url = 'https://reqres.in/api/login';

  login(loginInfo: Login): Observable<any> {
    return this.http
      .post(this.url, loginInfo)
      .pipe(catchError(this.service.handleError));
  }
  
  
  
}



