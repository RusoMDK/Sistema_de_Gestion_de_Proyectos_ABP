import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/_services/authentication.service';
import { User } from '../../core/_models/user.model';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent {
  isCollapsedLeft = false;
  isCollapsedRight = false;
  name = '';
  menuWidth = 300; // Añadido para controlar el ancho del menú

  currentUser!: User | null;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x),
    );
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(
      (x: User | null) => this.currentUser = x
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isCollapsedLeftChange(isCollapsed: boolean) {
    this.isCollapsedLeft = isCollapsed;
    console.log(`isCollapsedLeft: ${this.isCollapsedLeft}`);
  }

  isCollapsedRightChange() {
    this.isCollapsedRight = !this.isCollapsedRight;
  }
}
