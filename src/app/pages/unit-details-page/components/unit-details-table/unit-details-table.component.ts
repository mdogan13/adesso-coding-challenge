import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { APP_ROUTES } from 'src/app/constants/routes';
import { Unit } from 'src/app/models/unit';
import { AppState } from 'src/app/store/reducer/app.reducer';
import { selectedUnitSelector } from 'src/app/store/selectors/app.selectors';

@Component({
  selector: 'unit-details-table',
  templateUrl: './unit-details-table.component.html',
  styleUrls: ['./unit-details-table.component.scss'],
})
export class UnitDetailsTableComponent {
  private subscription!: Subscription;
  public selectedUnitData!: any;
  public tableTemplate: any = [
    { label: 'ID', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'Description', key: 'description' },
    { label: 'Min. Required Age', key: 'age' },
    { label: 'Wood Cost', key: 'Wood' },
    { label: 'Food Cost', key: 'Food' },
    { label: 'Gold Cost', key: 'Gold' },
    { label: 'Build Time', key: 'build_time' },
    { label: 'Reload Time', key: 'reload_time' },
    { label: 'Hit Points', key: 'hit_points' },
    { label: 'Attack', key: 'attack' },
    { label: 'Accuracy', key: 'accuracy' },
  ];
  
  constructor(
    private store: Store<{ aoeStore: AppState }>,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.store
      .select(selectedUnitSelector)
      .subscribe((selectedUnit) => {
        console.log('SELECTED', selectedUnit);
        this.selectedUnitData = selectedUnit ?? undefined;
        !selectedUnit && this.router.navigate([`/${APP_ROUTES.UNITS_PAGE}`]);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
