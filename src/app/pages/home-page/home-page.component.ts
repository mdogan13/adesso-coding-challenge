import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { resetSelectedUnit } from 'src/app/store/actions/app.actions';
import { AppState } from 'src/app/store/reducer/app.reducer';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private store: Store<{ aoeStore: AppState }>) {}

  ngOnInit() {
    this.store.dispatch(resetSelectedUnit());
  }
}
