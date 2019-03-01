import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { TokenService } from './../token/token.service';
import { UserService } from '../user/user.service';

const API_URL = 'http://138.219.88.80:17114';
//const API_URL = 'http://10.171.67.175:17114';

@Injectable({ providedIn: 'root' })

export class AuthService {

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private userService: UserService) {}

  authenticate(email: string, password: string){
    return  this.http
        .post(API_URL + '/api/v1/auth/new',
            { email, password },
            { observe: 'response'})
        .pipe(tap(res => {
            const authToken = res.body;
            this.userService.setToken('access_token', authToken.access_token);
            //this.userService.setToken('refresh_token', authToken.refresh_token);
        }));
  }

  refresh() {
    const refreshToken = this.tokenService.getToken('refresh_token');
    return this.http
      .post(API_URL + '/api/v1/auth/refresh',
      { refreshToken },
      { observe: 'response'})
      .pipe(tap(res => {
        const authToken = res.body;

        this.userService.setToken('access_token', authToken.access_token);
      }));
  }


}
