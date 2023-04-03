import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UnitsPageComponent } from './pages/units-page/units-page.component';
import { UnitDetailsPageComponent } from './pages/unit-details-page/unit-details-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const COMPONENTS = [
  HomePageComponent,
  UnitsPageComponent,
  UnitDetailsPageComponent,
];
@NgModule({
  declarations: [AppComponent, ...COMPONENTS],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
