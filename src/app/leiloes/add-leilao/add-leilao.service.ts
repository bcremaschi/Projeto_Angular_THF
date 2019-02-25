import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewLeilao } from './new-leilao';

const API_URL = 'https://localhost:3000';

@Injectable({ providedIn: 'root'})

export class AddLeilaoService {

  constructor(private http: HttpClient) {}

  addLeilao(newLeilao: NewLeilao) {
    return this.http.post(API_URL + '/add-leilao/', newLeilao);
  }
}
