import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({ providedIn: 'root'})

export class UserService {

  private userSubject = new BehaviorSubject<User>(null);

  constructor(private tokenService: TokenService) {

    this.tokenService.hasToken('access_token') &&
    this.decodeAndNotify();
  }

  setToken(key: string, token: string){
    this.tokenService.setToken(key, token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken('access_token');
    const user = jwt_decode(token) as User;

    this.userSubject.next(user);
  }

  logout(){
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken('access_token');
  }
}
