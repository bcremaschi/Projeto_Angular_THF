import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus = [
    { label: 'Adicionar Leilão', link: './../../leiloes/add-leilao' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
