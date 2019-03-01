import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog';
import { ThfToolbarAction, ThfToolbarProfile } from '@totvs/thf-ui/components/thf-toolbar';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { TokenService } from './../token/token.service';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    providers: [ThfNotificationService]
})

export class HeaderComponent {

  profile: ThfToolbarProfile = {
    avatar: '../../../assets/totvs-avatar-default.svg',
    subtitle: '',
    title: ''
  };

  user$: Observable<User>;
  user: User;

  constructor(private thfDialog: ThfDialogService,
              private thfNotification: ThfNotificationService,
              private tokenService: TokenService,
              userService: UserService) {
    this.user$ = userService.getUser();
    this.user$.subscribe(user => this.user = user);

    this.profile.subtitle = this.getSubtitle();
    this.profile.title = this.getTitle();
  }

  getSubtitle(): string{

    if (this.user) {
      return this.user.email;
    } else {
      return '';
    }


  }

  getTitle(): string {

    if (this.user) {
      const title = this.user.email;
      return title.substring(0, title.indexOf('@'));
    } else {
      return '';
    }

  }

  onClickNotification(item: ThfToolbarAction) {
    window.open('https://thf.totvs.com.br/dev', '_blank');

    item.type = 'default';
  }

  openDialog(item: ThfToolbarAction) {
    this.thfDialog.alert({
      title: 'Welcome',
      message: `Hello Mr. Dev! Congratulations, you are a TOTVER!`,
      ok: undefined
    });

    item.type = 'default';
  }

  showAction(item: ThfToolbarAction): void {
    this.thfNotification.success(`Action clicked: ${item.label}`);
  }
}
