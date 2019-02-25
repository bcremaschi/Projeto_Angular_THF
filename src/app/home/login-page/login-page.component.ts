import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { ThfLoginComponent } from '@totvs/thf-ui';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html'
})

export class LoginPageComponent implements OnInit {

  loginForm: ThfLoginComponent;

  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {

    const email = this.loginForm.getScreenValue();
    //const password = this.loginForm.getScreenValue();

    console.log(email);
    /*
    this.authService
        .authenticate(email, password)
        .subscribe(
          () => this.router.navigate(['add-leilao']),
          err => {
            console.log(err);
            this.loginForm.clear;
          }
        )
  */}

}
