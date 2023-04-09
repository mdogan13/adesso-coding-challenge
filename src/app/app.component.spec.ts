import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Store, StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer/app.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavBarComponent } from './components/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_ROUTES } from './constants/routes';
import { Router } from '@angular/router';
import { resetSelectedUnit } from './store/actions/app.actions';

const COMPONENTS = [HomePageComponent, NavBarComponent];
const ANGULAR_MATERIAL_MODULE = [
  MatTableModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatSliderModule,
  MatCheckboxModule,
  MatCardModule,
  MatGridListModule,
];

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ...COMPONENTS],
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        StoreModule.forRoot(reducer),
        ...ANGULAR_MATERIAL_MODULE,
      ],
      providers: [Router,Store],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the navbar', () => {
    const fixture = TestBed.createComponent(NavBarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the home page', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should navigate to units page', async () => {
    const fixture = TestBed.createComponent(NavBarComponent);
    const component = fixture.componentInstance;
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');

    component.goToUnitsPage();

    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/' + APP_ROUTES.UNITS_PAGE]);
  });

  it('should navigate to home page', async () => {
    const fixture = TestBed.createComponent(NavBarComponent);
    const component = fixture.componentInstance;
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');

    component.goToHomePage();

    await fixture.whenStable();

    expect(navigateSpy).toHaveBeenCalledWith(['/' + APP_ROUTES.HOME_PAGE]);
  });

  
  it('should dispatch resetSelectedUnit action on home page initialization', () => {
    const store = TestBed.inject(Store);
    const dispatchSpy = spyOn(store, 'dispatch');
    const fixture = TestBed.createComponent(HomePageComponent);

    fixture.detectChanges();

    expect(dispatchSpy).toHaveBeenCalledWith(resetSelectedUnit());
  });
});