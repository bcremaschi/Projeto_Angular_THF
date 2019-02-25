import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'totvs-leiloes';
  menus = [
    { label: 'Login', link: './login-page' },
    { label: 'Adicionar Leilão', link: './add-leilao' },
  ];
}
