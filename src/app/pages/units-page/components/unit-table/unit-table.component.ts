import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { APP_ROUTES } from 'src/app/constants/routes';
import { Unit } from 'src/app/models/unit';
import {
  resetFilters,
  resetSelectedUnit,
  setSelectedUnit,
} from 'src/app/store/actions/app.actions';
import { AppState } from 'src/app/store/reducer/app.reducer';
import {
  unitDataSelector,
  filtersSelector,
} from 'src/app/store/selectors/app.selectors';

@Component({
  selector: 'app-unit-table',
  templateUrl: './unit-table.component.html',
  styleUrls: ['./unit-table.component.scss'],
})
export class UnitTableComponent implements OnInit{
  public displayedColumns: string[] = ['id', 'name', 'age', 'costs'];
  public unitData!: Unit[];
  public tableData!: Unit[];
  public filters!: {
    age: string;
    wood: number[] | undefined;
    food: number[] | undefined;
    gold: number[] | undefined;
  };

  constructor(
    private store: Store<{ aoeStore: AppState }>,
    private router: Router
  ) {}
  ngOnInit() {
    this.store.dispatch(resetFilters());
    this.store.dispatch(resetSelectedUnit());
    this.store.select(unitDataSelector).subscribe((unitData) => {
      this.unitData = unitData;
    });

    this.store.select(filtersSelector).subscribe((filters) => {
      console.log('APPLY FILTERS');
      this.filters = filters;
      this.applyFilters();
    });
  }

  applyFilters() {
    this.filterByAge();
    this.filterByCost();
  }

  filterByAge() {
    if (this.filters.age !== 'all') {
      const ageFilter =
        this.filters.age.charAt(0).toUpperCase() + this.filters.age.slice(1);
      this.tableData = this.unitData.filter((unit) => unit.age === ageFilter);
    } else {
      this.tableData = this.unitData;
    }
  }

  filterByCost() {
    const woodFilter = this.filters.wood ?? [0, Infinity];
    const foodFilter = this.filters.food ?? [0, Infinity];
    const goldFilter = this.filters.gold ?? [0, Infinity];

    this.tableData = this.tableData.filter((unit) => {
      const woodCost = unit.cost?.Wood ?? 0;
      const foodCost = unit.cost?.Food ?? 0;
      const goldCost = unit.cost?.Gold ?? 0;

      return (
        woodCost >= woodFilter[0] &&
        woodCost <= woodFilter[1] &&
        foodCost >= foodFilter[0] &&
        foodCost <= foodFilter[1] &&
        goldCost >= goldFilter[0] &&
        goldCost <= goldFilter[1]
      );
    });
  }

  goToUnitDetailsPage(unitData: Unit) {
    this.store.dispatch(
      setSelectedUnit({
        payload: unitData,
      })
    );
    this.router.navigate([`/${APP_ROUTES.UNIT_DETAILS_PAGE}`]);
  }

  getObjectKeys(object: object): string[] | null {
    return object ? Object.keys(object) : null;
  }
}
