import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { NewDraftAuctions } from './new-draft-autions';

//Endereço API local:
const API_URL = 'http://localhost:8080';

//Endereço externo da API
//const API_URL = 'http://138.219.88.80:17114';

//Endereço interno da API.
//const API_URL = 'http://10.171.67.175:17114';

@Injectable({ providedIn: 'root' })

export class MyAuctionsServer {

  constructor(private http: HttpClient,
              private headers: HttpHeaders,
              private params: HttpParams) {}

  getAuctions(auth_token: string) {
    this.headers =  this.headers.set('Authorization', 'Bearer ' + auth_token);

    this.params = this.params.set('page', '');
    this.params = this.params.set('pageSize', '5');
    this.params = this.params.set('name', '');
    this.params = this.params.set('status', '0');
    this.params = this.params.set('owner', '');

    console.log(this.params);

    return this.http.get<NewDraftAuctions[]>(API_URL + '/api/v1/auctions', {headers: this.headers, params: this.params});
  }

  deleteAuctions() {

  }

  putAuctions() {

  }
}
