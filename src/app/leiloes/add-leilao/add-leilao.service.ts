import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewLeilao } from './new-leilao';

const API_URL = 'http://138.219.88.80:17114';

@Injectable({ providedIn: 'root'})

export class AddLeilaoService {

  constructor(private http: HttpClient) {}

  addLeilao(newLeilao: NewLeilao) {
    return this.http.post(API_URL + '/api/v1/auctions', newLeilao);
  }
}
