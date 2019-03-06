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

  constructor(private http: HttpClient) {}

  getAuctions(auth_token: string) {
    let headers: HttpHeaders = new HttpHeaders();
    let params: HttpParams = new HttpParams();
    headers =  headers.set('Authorization', 'Bearer ' + auth_token);

    params = params.set('page', '')
                    .set('pageSize', '5')
                    .set('name', '')
                    .set('status', '0')
                    .set('owner', '');

    return this.http.get<NewDraftAuctions[]>(API_URL + '/api/v1/auctions', {headers: headers, params: params});
  }

  deleteAuctions() {

  }

  putAuctions() {

  }
}
