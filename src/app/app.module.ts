import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UnitsPageComponent } from './pages/units-page/units-page.component';
import { UnitDetailsPageComponent } from './pages/unit-details-page/unit-details-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from './components/navbar.component';
 

const COMPONENTS = [
  HomePageComponent,
  UnitsPageComponent,
  UnitDetailsPageComponent,
  NavBarComponent
];
const ANGULAR_MATERIAL_MODULE = [
  MatTableModule,
  MatButtonModule
];

@NgModule({
  declarations: [AppComponent, ...COMPONENTS],
  imports: [BrowserModule, AppRoutingModule, ...ANGULAR_MATERIAL_MODULE],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
