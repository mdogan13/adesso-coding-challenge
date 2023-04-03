import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UnitsPageComponent } from './pages/units-page/units-page.component';
import { UnitDetailsPageComponent } from './pages/unit-details-page/unit-details-page.component';
import { APP_ROUTES } from './constants/routes';

const routes: Routes = [
  { path: '', redirectTo: APP_ROUTES.HOME_PAGE, pathMatch: 'full' },
  { path: APP_ROUTES.HOME_PAGE, component: HomePageComponent },
  { path: APP_ROUTES.UNITS_PAGE, component: UnitsPageComponent },
  { path: APP_ROUTES.UNIT_DETAILS_PAGE, component: UnitDetailsPageComponent },
  { path: '**', redirectTo: APP_ROUTES.HOME_PAGE }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
