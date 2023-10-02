import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  handleError(error: HttpErrorResponse) {
    let message: string = '';
    if (error.error instanceof ErrorEvent) {
      message = `This Error From Client Side ` + error.message;
    } else {
      message = `Error From Server` + error.message;
    }
    return throwError(() => message);
  }
}
