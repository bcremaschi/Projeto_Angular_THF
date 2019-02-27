import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const API_URL = 'http://138.219.88.80:17114';

@Injectable({ providedIn: 'root' })

export class AuthService {

  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string){

    return  this.http
        .post(API_URL + '/api/v1/auth/new',
            { email, password },
            { observe: 'response'})
        .pipe(tap(res => {
            const authToken = res.headers.get('');

            console.log(authToken);
        }));
  }


}
