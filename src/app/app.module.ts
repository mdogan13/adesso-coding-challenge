import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UnitsPageComponent } from './pages/units-page/units-page.component';
import { UnitDetailsPageComponent } from './pages/unit-details-page/unit-details-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavBarComponent } from './components/navbar.component';
import { StoreModule } from '@ngrx/store';
import { reducer as aoeReducer } from './store/reducer/app.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnitTableFilterComponent } from './pages/units-page/components/unit-table-filter/unit-table-filter.component';
import { UnitTableComponent } from './pages/units-page/components/unit-table/unit-table.component';
import { UnitDetailsTableComponent } from './pages/unit-details-page/components/unit-details-table/unit-details-table.component';

const COMPONENTS = [
  HomePageComponent,
  UnitsPageComponent,
  UnitDetailsPageComponent,
  NavBarComponent,
  UnitTableFilterComponent,
  UnitTableComponent,
  UnitDetailsTableComponent
];
const ANGULAR_MATERIAL_MODULE = [
  MatTableModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatSliderModule,
  MatCheckboxModule,
  MatCardModule,
  MatGridListModule,
];

@NgModule({
  declarations: [AppComponent, ...COMPONENTS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ aoeStore: aoeReducer }),
    ...ANGULAR_MATERIAL_MODULE,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
