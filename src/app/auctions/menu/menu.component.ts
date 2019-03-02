import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus = [
    { label: 'Meus Leilões', link: '/my-auctions-page'},
    { label: 'Adicionar Leilão', link: '/add-auction-page' },
    { label: 'Leilões Abertos', link: '/add-auction-page'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
