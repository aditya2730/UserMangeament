import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class authService {
  constructor() {}

  setToken(token: string): void {
    localStorage.setItem('token',token);
  }

  getToken() {
    return localStorage.getItem('token')?.toString();
  }

  removeToken(): void {
    return localStorage.removeItem('token');
  }
}

