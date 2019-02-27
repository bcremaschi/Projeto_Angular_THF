import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewAuction } from './new-auction';

//Endereço externo da API
const API_URL = 'http://138.219.88.80:17114';

//Endereço interno da API.
//const API_URL = 'http://10.171.67.175:17114';

@Injectable({ providedIn: 'root'})

export class AddAuctionService {

  constructor(private http: HttpClient) {}

  addAuction(newAuction: NewAuction) {
    return this.http.post(API_URL + '/api/v1/auctions', newAuction);
  }
}
