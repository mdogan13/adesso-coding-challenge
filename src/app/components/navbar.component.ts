import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../constants/routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavBarComponent {
  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigate([`/${APP_ROUTES.HOME_PAGE}`]);
  }
  goToUnitsPage() {
    this.router.navigate([`/${APP_ROUTES.UNITS_PAGE}`]);
  }
}
