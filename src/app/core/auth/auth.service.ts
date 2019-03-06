import { Auth } from './auth';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { TokenService } from './../token/token.service';
import { UserService } from '../user/user.service';
import { Refresh } from './refresh';

const API_URL = 'http://localhost:8080';
//const API_URL = 'http://10.171.67.175:17114';

@Injectable({ providedIn: 'root' })

export class AuthService {

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private userService: UserService) {}

  //Realiza o post de autenticação na API.
  authenticate(email: string, password: string) {
    return  this.http
        .post(API_URL + '/api/v1/auth/new',
            { 'email': email, 'password': password },
            { observe: 'response'})
        .pipe(tap(res => {
            const authToken = res.body as Auth;
            this.userService.setToken('access_token', authToken.access_token);
            this.userService.setToken('refresh_token', authToken.refresh_token);
        }));
  }

  //Realiza o post de refresh do token de autenticação na API.
  refresh() {
    const refreshToken = this.tokenService.getToken('refresh_token');

    return this.http
      .post(API_URL + '/api/v1/auth/refresh',
       { 'refresh_token': refreshToken} ,
      { observe: 'response'})
      .pipe(tap(res => {
        const authToken = res.body as Refresh;
        this.userService.setToken('access_token', authToken.access_token);
      }));
  }
}
