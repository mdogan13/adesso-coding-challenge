import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducer/app.reducer';
import { unitDataSelector } from 'src/app/store/selectors/app.selectors';

@Component({
  selector: 'units-page',
  templateUrl: './units-page.component.html',
  styleUrls: ['./units-page.component.scss'],
})
export class UnitsPageComponent {
  constructor(private store: Store<{ aoeStore: AppState }>) {}

  ngOnInit() {
    this.store.select(unitDataSelector).subscribe((unitData) => {
      console.log(unitData);
    });
  }
}
